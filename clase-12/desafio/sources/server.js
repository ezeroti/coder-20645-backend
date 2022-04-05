const { Productos, Mensajes } = require('./objects.js');
const express = require('express');
const { Router } = express;
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const moment = require('moment');

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

io.on('connection', (socket) => {
  socket.emit("messages", Mensajes);

  socket.on("checkData", (data) => {
    // Usando una regex
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.email.match(regexEmail)) {
      data.date = moment().format("DD/MM/YYYY hh:mm:ss");
      Mensajes.push(data);
      io.sockets.emit("messages", Mensajes);
    } else {
      return false; 
    }

    // Simple check con include
    // if (data.email.includes("@")) {
    // data.date = moment().format("DD/MM/YYYY hh:mm:ss");
    // Mensajes.push(data);
    // io.sockets.emit("messages", Mensajes);
    // } else {
    //   return false;
    // }
  });
})

module.exports = { router, app }
