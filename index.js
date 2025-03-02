const express = require('express');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api", userRouter, authRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en http://localhost:${PORT}`);
});