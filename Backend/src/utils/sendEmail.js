const nodemailer = require("nodemailer");
const config = require("../config/config");

const sendEmail = async ({ email, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.GOOGLE_USER,
        clientId: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        refreshToken: config.GOOGLE_REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `"ShopNest Support" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subject,
      html: message,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent to ${email}`);
  } catch (error) {
    console.error(`Failed to send email to ${email}: ${error.message}`);
  }
};

module.exports = sendEmail;
