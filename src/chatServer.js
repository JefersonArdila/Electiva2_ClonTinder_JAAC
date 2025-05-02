const chatServer = (httpServer) => {
    const { Server, Socket } = require("socket.io");
    const io = new Server(httpServer);
    
    io.on("connection", (socket = Socket) => {
      console.log(`[INFO] New user ${socket.id} connected!`);

      socket.on("disconnect", () => {
        console.log(`[INFO] User ${socket.id} disconnected!`);
      });

      socket.on("connection_error", (error) => {
        console.log("[Error] Connection error: ", error);
      });

      socket.on("chat_message", (msg) => {
        console.log("[MESSAGE]", msg);
        io.emit("chat_message", msg);
      });

      socket.emit("connection_success", {
        message: "Conexión establecida correctamente!",
      });
    });
};

module.exports = chatServer;