const express = require('express');
const moment = require('moment');

const app = express();
const port = 8080;
let visitCount = 0

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.get('/', (req, res) => {
    res.send('<div style="text-align:center;background:black"><h1 style="color:yellow">Bienvenido al servidor Express!</></>')
});

app.get('/visitas', (req, res) => {
    visitCount++
    res.send(`<div style="text-align:center;background:black"><h1 style="color:yellow">La cantidad de visitas es ${visitCount}</></>`)
});

app.get('/fyh', (req, res) => {
    res.send(`{ fyh: ${moment().format('DD/MM/YYYY HH:mm:ss')} }`)
});