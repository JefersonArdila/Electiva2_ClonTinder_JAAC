const express = require('express');
const router = require('./routes/users');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en http://localhost:${PORT}`);
});