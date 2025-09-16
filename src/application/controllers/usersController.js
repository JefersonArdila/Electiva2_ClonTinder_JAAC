const { validationResult } = require("express-validator");

// Agregar esta función al archivo usersController.js existente

const { PrismaClient } = require("../../../generated/prisma");
const prisma = new PrismaClient();

// Función para obtener usuarios disponibles para swipe
const getAvailableUsers = async (req, res) => {
  try {
    const currentUserId = req.user.id;

    // Obtener IDs de usuarios a los que ya se les hizo swipe
    const swipedUsers = await prisma.swipe.findMany({
      where: { userId: currentUserId },
      select: { targetUserId: true }
    });

    const swipedUserIds = swipedUsers.map(swipe => swipe.targetUserId);

    // Obtener usuarios disponibles (excluyendo al usuario actual y a los ya swipeados)
    const availableUsers = await prisma.user.findMany({
      where: {
        AND: [
          { id: { not: currentUserId } }, // No incluir al usuario actual
          { id: { notIn: swipedUserIds } } // No incluir usuarios ya swipeados
        ]
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        gender: true,
        // Agregar más campos si tienes (edad, bio, fotos, etc.)
      },
      take: 10 // Limitar a 10 usuarios por carga
    });

    res.json(availableUsers);
  } catch (error) {
    console.error("Error obteniendo usuarios disponibles:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
const getUserId = (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } else {
    res.status(400).json({ error: result.array() });
  }
};

const createUser = (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const { firstName, lastName, age, email, gender } = req.body;
    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      age,
      email,
      gender,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ error: result.array() });
  }
};

const updateUser = (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const id = parseInt(req.params.id);
    const { firstName, lastName, age, email, gender } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    users[userIndex] = {
      ...users[userIndex],
      firstName: firstName || users[userIndex].firstName,
      lastName: lastName || users[userIndex].lastName,
      age: age || users[userIndex].age,
      email: email || users[userIndex].email,
      gender: gender || users[userIndex].gender,
    };
    res.json(users[userIndex]);
  }
  res.status(400).json({ error: result.array() });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  users = users.filter((user) => user.id !== parseInt(id));
  res.status(200).json(user);
};

module.exports = {
  createUser,
  updateUser,
  getUserId,
  deleteUser,
  getAvailableUsers // Nueva función
};