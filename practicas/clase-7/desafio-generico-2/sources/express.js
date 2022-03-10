const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Para interpretar mensajes JSON en formato UrlEncoded

const port = 8080;

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

module.exports = app;