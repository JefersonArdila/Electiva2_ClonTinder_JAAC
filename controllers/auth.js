const { PrismaClient } = require("../generated/prisma/client.js");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { firstName, lastName, age, email, gender, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      age,
      email,
      gender,
      password: hashedPassword,
    },
  });
  res.status(201).json({ message: "Usuario registrado correctamente" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Buscar el usuario en la base de datos
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ error: "Usuario o contraseña inválida" });
  }
  // Verificar la contraseña
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({ error: "Usuario o contraseña inválida" });
  }
  // Generar un token JWT
  const token = jwt.sign(
    { id: user.id }, 
    process.env.JWT_SECRET, 
    { expiresIn: "4h" }
  );
  res.json({
    message: "Inicio de sesión exitoso",
    token,
    user
  });
};

const logoutUser = (req, res) => {
  res.status(200).json({ message: "Sesión cerrada correctamente"});
};

const resetPassword = (req, res) => {
    const credentials = {
        user: "admin",
        password: "admin",
    };
    const { user, newPassword } = req.body;

    if (user !== credentials.user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    credentials.password = newPassword;
    return res.status(200).json({ message: "Contraseña restablecida correctamente" });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword
};