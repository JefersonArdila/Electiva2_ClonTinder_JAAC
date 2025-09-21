const { PrismaClient } = require('@prisma/client');
const { validationResult } = require("express-validator");
const prisma = new PrismaClient();

const createSwipe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { targetUserId, action } = req.body;
  const userId = req.user.id;

  if (userId === targetUserId) {
    return res.status(400).json({ error: "No puedes hacer swipe a ti mismo" });
  }

  try {
    // Crear el swipe
    const swipe = await prisma.swipe.create({
      data: {
        userId,
        targetUserId,
        action
      }
    });

    // Si es DISLIKE, no se necesita más lógica
    if (action === "DISLIKE") {
      return res.status(201).json({
        message: "Dislike registrado correctamente.",
        swipe
      });
    }

    // Si es LIKE, buscar reciprocidad
    if (action === "LIKE") {
      const reciprocalSwipe = await prisma.swipe.findFirst({
        where: {
          userId: targetUserId,
          targetUserId: userId,
          action: "LIKE"
        }
      });

      if (reciprocalSwipe) {
        // Verificar si ya existe un match
        const existingMatch = await prisma.match.findFirst({
          where: {
            OR: [
              { userAId: userId, userBId: targetUserId },
              { userAId: targetUserId, userBId: userId }
            ]
          }
        });

        if (!existingMatch) {
          const match = await prisma.match.create({
            data: {
              userAId: userId,
              userBId: targetUserId
            },
            include: {
              userA: {
                select: { id: true, firstName: true, lastName: true, email: true }
              },
              userB: {
                select: { id: true, firstName: true, lastName: true, email: true }
              }
            }
          });

          return res.status(201).json({
            message: "¡Es un match!",
            match
          });
        }

        return res.status(201).json({
          message: "Ya existía un match entre ambos usuarios.",
          swipe
        });
      }

      return res.status(201).json({
        message: "Like registrado, esperando reciprocidad.",
        swipe
      });
    }
  } catch (error) {
    console.error("Error al crear swipe:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getSwipes = async (req, res) => {
  try {
    const swipes = await prisma.swipe.findMany({
      where: { userId: req.user.id }
    });
    return res.json(swipes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getMatches = async (req, res) => {
  try {
    const userId = req.user.id;
    const matches = await prisma.match.findMany({
      where: {
        OR: [
          { userAId: userId },
          { userBId: userId }
        ]
      },
      include: {
        userA: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        userB: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    return res.json({
      count: matches.length,
      matches
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSwipe,
  getSwipes,
  getMatches
};
