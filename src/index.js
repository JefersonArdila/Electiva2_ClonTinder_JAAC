require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const chatServer = require("./chatServer");
const authenticationToken = require("./infrastructure/middlewares/auth");
const { PrismaClient } = require("../generated/prisma");
const userRoutes = require("./application/routes/users");
const authRoutes = require("./application/routes/auth");
const swipeRoutes = require("./application/routes/swipes");
const path = require("path");

const app = express();
const httpServer = createServer(app);
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes, authRoutes, swipeRoutes);

// Endpoint temporal para comprobar la conexión al servidor websocket
app.use(express.static(path.join(__dirname + "/index.html")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

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

httpServer.listen(PORT, () => {
  console.log(`[INFO] Http server listening on: http://localhost:${PORT}`);
});

chatServer(httpServer);
