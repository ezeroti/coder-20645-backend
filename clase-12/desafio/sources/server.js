const Productos = require('./products.js');
const express = require('express');
const { Router } = express;
const handlebars = require('express-handlebars');
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const router = Router();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const port = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials'
}))

app.set('views', './views');
app.set('view engine', 'hbs')

const server = httpServer.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.use('/api/productos', router);
app.use(express.static('public'));

io.on('connection', (socket) => {
      console.log('Usuario conectado');
      socket.emit("messages", Productos);
})
  
module.exports = { router, app };