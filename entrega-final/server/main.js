const express = require('express');
require('dotenv').config()
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

module.exports = { app }
