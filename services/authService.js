const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (userData) => {
    const { firstName, lastName, email, password, gender } = userData;
  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });
  if (userExists) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    gender,
    role: "USER",
  };
  return prisma.user.create({
    data: newUser,
  });
};

const loginUser = async (email, password) => {
    // Search for the user in the database
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw new Error("Usuario o contraseña inválida");
      }
      // Validate password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Usuario o contraseña inválida");
      }
      // Generate JWT token
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "4h",
      });
      return token;
};

module.exports = {
  createUser,
  loginUser,
};