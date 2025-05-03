const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clon Tinder API",
      version: "1.0.0",
      description: "API para ClonTinder",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [
    "./src/application/routes/*.js",         // Todas las rutas
    "./src/application/controllers/*.js",    // Opcional: si pones doc allí
    "./src/application/controllers/*.js",    // Opcional: si pones doc allí
  ],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
