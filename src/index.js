const express = require('express');
const userRouter = require('./application/routes/usersRoutes');
const authRouter = require('./application/routes/authRoutes');
const swipeRoutes  = require('./application/routes/swipesRoutes');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api", userRouter, authRouter,swipeRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en http://localhost:${PORT}`);
});