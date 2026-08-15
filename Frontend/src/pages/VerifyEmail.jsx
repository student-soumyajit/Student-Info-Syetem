import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // If redirected from register, pre-fill email
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
      setSuccess(true);
      // Hide success message after 5 seconds
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [location.state?.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        // Log in the user with the returned user data
        // login(data.user);
        alert("Email verified successfully! You can now log in.");
        navigate("/login");
      } else {
        setError(data.message || "Verification failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Verify Email</h2>
        <p className="verify-subtitle">
          Please enter your email and the OTP sent to your email address
        </p>

        {success && (
          <div className="success-message">
            ✓ Registration successful! Check your email for the OTP.
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <input
          type="text"
          placeholder="Enter OTP (6 digits)"
          value={otp}
          onChange={(e) => setOtp(e.target.value.slice(0, 6))}
          maxLength="6"
          required
          disabled={loading}
        />

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Verifying..." : "Verify"}
        </button>

        <p>
          Didn't receive the OTP? Check your spam folder or contact support.
        </p>
      </form>
    </div>
  );
};

export default VerifyEmail;
