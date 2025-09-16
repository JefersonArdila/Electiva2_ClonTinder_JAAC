const express = require("express");
const router = express.Router();
const authMiddleware = require("../../infrastructure/middlewares/auth");
const messagesController = require("../controllers/messagesController");

router.post("/messages", authMiddleware, messagesController.sendMessage);
router.get("/messages/:matchId", authMiddleware, messagesController.getMessagesByMatch);

module.exports = router;
