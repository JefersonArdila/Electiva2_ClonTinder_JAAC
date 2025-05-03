require("dotenv").config();
const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const userRoutes = require("./application/routes/users");
const authRoutes = require("./application/routes/auth");
const swipeRoutes = require("./application/routes/swipes");

const authenticationToken = require("./infrastructure/middlewares/auth");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes, authRoutes, swipeRoutes);

// **Configuración de Swagger**
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Clon Tinder API",
      version: "1.0.0",
      description: "API for ClonTinder application",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/application/routes/*.js"], // Ruta a tus archivos de rutas con comentarios Swagger
};

// Inicializa Swagger JSDoc
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Ruta para acceder a la documentación de la API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

// Solo ejecuta el servidor si este archivo se ejecuta directamente (no desde pruebas)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
}

// Exportar `app` para poder usarlo en los tests
module.exports = app;
