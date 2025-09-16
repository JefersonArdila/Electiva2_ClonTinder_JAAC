const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.sendMessage = async (req, res) => {
  const { content, matchId, receiverId } = req.body;
  const senderId = req.user.id;

  try {
    const message = await prisma.message.create({
      data: { content, matchId, senderId, receiverId },
    });

    // Notificar al receptor a través de Socket.io usando el mismo evento 'newMessage'
    const io = req.app.get("io");
    io.to(matchId).emit("newMessage", message);

    console.log(`Mensaje enviado a la sala ${matchId}:`, message);

    res.status(201).json({ message });
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    res.status(500).json({ error: "Error al enviar mensaje" });
  }
};

exports.getMessagesByMatch = async (req, res) => {
  const { matchId } = req.params;

  try {
    const messages = await prisma.message.findMany({
      where: { matchId },
      orderBy: { createdAt: "asc" },
    });

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
};
