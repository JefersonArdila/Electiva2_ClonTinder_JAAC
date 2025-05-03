const { PrismaClient } = require('../../../generated/prisma');
const prisma = new PrismaClient();

const sendMessage = async (senderId, receiverId, message) => {
  try {
    const newMessage = await prisma.message.create({
      data: {
        senderId: senderId,
        receiverId: receiverId,
        content: message,
      },
    });
    return newMessage;
  } catch (error) {
    throw new Error("Error sending message: " + error.message);
  }
};

const getConversation = async (userId) => {};

module.exports = {
    sendMessage,
    getConversation
};