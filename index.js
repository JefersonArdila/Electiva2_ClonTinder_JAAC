const express = require('express');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const swipeRoutes  = require('./routes/swipes');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api", userRoutes, authRoutes, swipeRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en http://localhost:${PORT}`);
});