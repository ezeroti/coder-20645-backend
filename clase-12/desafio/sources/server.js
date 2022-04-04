const { Productos } = require('./products.js');
const express = require('express');
const { Router } = express;
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const router = Router();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const port = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs')

const server = httpServer.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.use('/api/productos', router);
app.use(express.static('public'));

io.on('connection', (socket) => {
      console.log('Usuario conectado');

      socket.on("new-product", (data) => {
        Productos.push(data);
        io.sockets.emit("productList", data);
      });
})
  
module.exports = { router, app, io }