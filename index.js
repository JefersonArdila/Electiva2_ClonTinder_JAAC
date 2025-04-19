require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const swipeRoutes = require("./routes/swipes");
const authenticationToken = require("./middlewares/auth");
const { PrismaClient } = require("./generated/prisma/client.js");
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(express.json());
app.use("/api", userRoutes, authRoutes, swipeRoutes);

// Endpoint temporal para comprobar la conexión a la base de datos
app.get("/db-users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al comunicarse con la base de datos" });
  }
});

// Endpoint temporal para comprobar la protección de rutas
app.get("/protected-route", authenticationToken, (req, res) => {
  res.send("Esta es una ruta protegida");
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
