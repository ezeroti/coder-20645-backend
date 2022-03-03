const express = require('express');
const fs = require('fs');

class Contenedor {
    constructor (fileName) {
        this.fileName = fileName;
    }

    getAll = async () => {
        try {
            return await fs.promises.readFile(this.fileName, 'utf-8');
        } catch (err) {
            throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

    getRandom = async () => {
        try {
            const productList = JSON.parse(await fs.promises.readFile(this.fileName, 'utf-8'));
            let randomNumer = Math.floor(Math.random() * productList.length ) + 1;
            return productList.filter((product) => product.id === randomNumer);
        } catch (err) {
            throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

}

const app = express();
const port = 8080;
const fileName = new Contenedor('productos.txt');

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.get('/productos', async (req, res) => {
    res.type('json'); // pretty-print JSON
    res.send(await fileName.getAll());
});

app.get('/productoRandom', async (req, res) => {
    res.type('json');
    res.send(await fileName.getRandom());
});
