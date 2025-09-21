require("dotenv").config();
const express = require("express");
const http = require("http"); // Necesario para usar socket.io con Express
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { Server } = require("socket.io");

const setupSocketIO = require("./infrastructure/socket");

const userRoutes = require("./application/routes/users");
const authRoutes = require("./application/routes/auth");
const swipeRoutes = require("./application/routes/swipes");
const messagesRoutes = require("./application/routes/messages");

const authenticationToken = require("./infrastructure/middlewares/auth");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const server = http.createServer(app); // 🔌 Necesario para Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Inicializar lógica de sockets
setupSocketIO(io);

// Hacer io accesible desde cualquier parte con req.app.get("io")
app.set("io", io);

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api", userRoutes, authRoutes, swipeRoutes, messagesRoutes);

// Swagger docs
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Clon Tinder API",
      version: "1.0.0",
      description: "API for ClonTinder application",
    },
    servers: [{ url: "http://localhost:3000/api" }],
  },
  apis: ["./src/application/routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoint para verificar DB
app.get("/db-users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al comunicarse con la base de datos" });
  }
});

// Ruta protegida
app.get("/protected-route", authenticationToken, (req, res) => {
  res.send("Esta es una ruta protegida");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en: http://localhost:${PORT}`);
    console.log(`📡 Socket.IO corriendo en mismo servidor`);
    console.log(`📚 Documentación en: http://localhost:${PORT}/api-docs`);
  });
}

module.exports = app;
