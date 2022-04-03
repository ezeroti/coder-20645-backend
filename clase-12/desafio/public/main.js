const socket = io();
// const { app } = require('./server.js');

function render(data) {
    const html = 'hola'
    document.getElementById('messages').innerHTML = html;
}

// socket.on('messages', function(data) { render(data); });
socket.on('messages', function(data) { render(data); });


// app.get('/productos', (req, res) => {
//   const amount = () => {if (Productos.length < 1) { return false } else { return true }};
//   res.render('main', { listProducts: Productos, ifExists: amount() });
// });