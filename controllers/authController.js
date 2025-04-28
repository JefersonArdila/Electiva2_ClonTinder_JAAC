const authService = require("../services/authService");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    await authService.createUser(userData);
    return res.status(201).json({ 
      message: "Usuario registrado correctamente" 
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    return res.json({
      message: "Inicio de sesión exitoso",
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const logoutUser = (req, res) => {
  res.status(200).json({ message: "Sesión cerrada correctamente" });
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
  return res
    .status(200)
    .json({ message: "Contraseña restablecida correctamente" });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
};
