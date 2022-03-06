const express = require('express');

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

module.exports = app;