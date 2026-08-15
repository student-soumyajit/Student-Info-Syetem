const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  verifyEmail,
} = require("../controllers/authController");
const { protect } = require('../middlewares/authMiddleware')
const { admin } = require('../middlewares/adminMiddleware')

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/user", protect, admin, getUsers)
/**
 * POST /api/auth/verify-email
 */
router.post("/verify-email", verifyEmail)

module.exports = router
