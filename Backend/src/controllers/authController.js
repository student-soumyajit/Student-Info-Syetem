const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");
const config = require("../config/config");
const crypto = require("crypto");
const otpModel = require("../models/otpModel");

const generateToken = (id) => {
  return jwt.sign({ id }, config.JWT_SECRET, { expiresIn: "30d" });
};

const setTokenCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: config.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

const hashOtp = (otp) => {
  return crypto.createHash("sha256").update(String(otp)).digest("hex");
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (user) {
      const otp = String(Math.floor(100000 + Math.random() * 900000));
      const otpHash = hashOtp(otp);

      await otpModel.deleteMany({ user: user._id });
      await otpModel.create({
        email: user.email,
        user: user._id,
        otpHash,
      });

      // Send Welcome / OTP Email
      const message = `
        <h2>Welcome to ShopNest, ${username}!</h2>
        <p>Thank you for registering on our platform.</p>
        <p>Your one-time verification/discount OTP is: <strong>${otp}</strong></p>
      `;

      await sendEmail({
        email: user.email,
        subject: "Welcome to ShopNest - Your OTP",
        message,
      });

      res.status(201).json({
        message: "user registered successfully",
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        verified: user.verified,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      if (!user.verified) {
        return res.status(403).json({
          message:
            "Email not verified. Please verify your email before logging in.",
        });
      }

      const token = generateToken(user._id);
      setTokenCookie(res, token);
      res.json({
        message: "user logged successfully",
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: config.NODE_ENV === "production" ? "none" : "lax",
  });
  res.json({ message: "Logged out successfully" });
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyEmail = async (req, res) => {
  const body = req.body && typeof req.body === "object" ? req.body : {};
  const { otp, email } = body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const otpHash = hashOtp(otp);

  const otpDoc = await otpModel.findOne({
    email,
    otpHash,
  });

  if (!otpDoc) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  const user = await User.findByIdAndUpdate(
    otpDoc.user,
    { verified: true },
    { returnDocument: "after" },
  );

  await otpModel.deleteMany({
    user: otpDoc.user,
  });

  // Generate token for the user
  const token = generateToken(user._id);
  setTokenCookie(res, token);

  return res.status(200).json({
    success: true,
    message: "Email verified successfully",
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      verified: user.verified,
      token,
    },
  });
};

module.exports = { registerUser, loginUser, logoutUser, getUsers, verifyEmail };
