const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
} = require("../controllers/authController");
// const authenticationToken = require("../middlewares/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/reset-password", resetPassword);

module.exports = router;