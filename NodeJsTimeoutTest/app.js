const express = require('express')
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    setTimeout(() => {
        console.log("Se envía un saludo!");
        return res.send("Hola Mundo");    
    }, 10000);
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});