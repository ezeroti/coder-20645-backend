const { app } = require('../server/main.js');
const prod = require('express').Router();

app.use('/api/productos', prod);

module.exports = { prod };
