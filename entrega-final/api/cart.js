const { app } = require('../server/main.js');
const cart = require('express').Router();

app.use('/api/carrito', cart);

module.exports = { cart };
