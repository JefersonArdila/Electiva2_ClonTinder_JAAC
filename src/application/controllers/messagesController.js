const { PrismaClient } = require('../../../generated/prisma');
const { sendMessage, getConversation } = require('../../domain/services/messagesService');

const prisma = new PrismaClient();

const sendMessage = async (req, res) => {
    try {
        const { receiverId, message } = req.body.message;
        const newMessage = await sendMessage({
          senderId: req.user.id,
          receiverId: receiverId,
          content: message,
        });
        res.status(200).json({
            status: true,
            message: newMessage
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error sending message'
        });
    }
};

const getConversation = async (req, res) => {
    try {
        const conversation = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: req.user.id, receiverId: req.params.userId },
                    { senderId: req.params.userId, receiverId: req.user.id }
                ]
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        res.status(200).json({
            success: true,
            conversation
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching conversation'
        });
    }
};

module.exports = {
    sendMessage,
    getConversation
};