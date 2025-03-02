const express = require("express");
const { loginUser, logoutUser, resetPassword } = require("../controllers/auth");
const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/reset-password", resetPassword);

module.exports = router;