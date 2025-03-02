const loginUser = (req, res) => {
    const credentials = {
        user: "admin",
        password: "admin",
    };
  const { user, password } = req.body;
  if (user !== credentials.user || password !== credentials.password) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }
  res.status(200).json({ message: "Bienvenido " + user });
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
  loginUser,
  logoutUser,
  resetPassword
};