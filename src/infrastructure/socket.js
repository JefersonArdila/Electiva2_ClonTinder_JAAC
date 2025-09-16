function setupSocketIO(io) {
  io.on("connection", (socket) => {
    console.log("🟢 Usuario conectado:", socket.id);

    socket.on("joinMatch", (matchId) => {
      socket.join(matchId);
      console.log(`➡️ Socket ${socket.id} se unió a match ${matchId}`);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Usuario desconectado:", socket.id);
    });
  });
}

module.exports = setupSocketIO;
