const { app, Contenedor } = require('./sources/main.js');

const fileName = new Contenedor('productos.txt');

app.get('/productos', async (req, res) => {
    res.type('json'); // pretty-print JSON
    res.send(await fileName.getAll());
});

app.get('/productoRandom', async (req, res) => {
    res.type('json');
    res.send(await fileName.getRandom());
});
