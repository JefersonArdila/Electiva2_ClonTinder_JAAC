const authService = require("../../domain/services/authService");

const loginUser = (req, res) => {
    try {
        res.json(authService.loginUser(req.body.user, req.body.password));
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = {
    login: loginUser, 
    register: (req, res) => res.json({ message: "Registro exitoso" })
};
