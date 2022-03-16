const express = require('express');
const { Router } = express;

const app = express();
const router = Router();
const port = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.use(express.static('public'));
app.use('/api/productos', router);
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

module.exports = router;