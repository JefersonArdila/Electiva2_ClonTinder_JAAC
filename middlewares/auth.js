const jwt = require("jsonwebtoken");

function authenticationToken(req, res, next) {
    // const token = req.headers["authorization"];
    const token = req.header("authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Acceso denegado, no se suministró un token" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token no válido" });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticationToken;