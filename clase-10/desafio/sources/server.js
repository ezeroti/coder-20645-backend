const express = require('express');
const { Router } = express;
const handlebars = require('express-handlebars');

const app = express();
const router = Router();
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
// hbs
// app.set('view engine', 'hbs')

// pug
// app.set('view engine', 'pug');

// ejs
app.set('view engine', 'ejs');

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.use(express.static('public'));
app.use('/api/productos', router);
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

module.exports = { router, app };