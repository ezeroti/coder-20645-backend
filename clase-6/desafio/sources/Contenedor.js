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
};

module.exports = Contenedor;