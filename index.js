const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, ()=>{
    console.log(`Servidor Funcionando en http://localhost:${PORT}`);
});