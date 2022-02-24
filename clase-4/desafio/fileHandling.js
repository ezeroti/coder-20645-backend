const fs = require('fs');
const productList = [];

class Contenedor {
    constructor (fileName) {
        this.fileName = fileName;
    }

    save = async (products) => {
        try {
            if(!products['id']){
                products['id'] = productList.length+1;
            }
            productList.push(products);
            await fs.promises.writeFile(this.fileName, JSON.stringify(productList, null, 2),'utf-8');
        } catch (err) {
            throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

    getById = async (id) => {
        try {
            if (!productList[id-1]){
                return null;
            } else {
                console.log(productList[id-1])
            }
        } catch (err) {
            throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

    getAll = async () => {
        try {
            return console.log(await fs.promises.readFile(this.fileName, 'utf-8'));
        } catch (err) {
            throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

    deleteById = async (id) => {
        try {
            if (!productList[id-1]){
                return null;
            } else {
                const newProductList = productList.filter((product) => product.id !== id);
                await fs.promises.writeFile(this.fileName, JSON.stringify(newProductList, null, 2),'utf-8');
            }
        } catch (err) {
            throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

    deleteAll = async () => {
        try {
                await fs.promises.writeFile(this.fileName, '','utf-8');
        } catch (err) {
                throw new Error(`Ha ocurrido un error! ${err.message}`);
        }
    };

}

const fileName = new Contenedor('productos.txt');

async function withOrder() {
        // Cargo 3 productos
        await fileName.save({
            title: 'Capacitor Electrolitico - 1000mF x 25V',
            price: 125.50,
            thumbnail: 'https://leantec.es/wp-content/uploads/2018/02/p_1_6_7_7_1677-Condensador-electrolitico-1000uF-25V.jpg'
        });
        await fileName.save({
            title: 'Regulador de tension LM7818 - 18V x 1.5A',
            price: 322.99,
            thumbnail: 'https://leantec.es/wp-content/uploads/2018/02/p_1_4_6_7_1467-Regulador-tension-L7818CV-LM7818-7818-18V-1.5A-TO-220.jpg'
        });
        await fileName.save({
            title: 'Timer NE555 DIP-8',
            price: 322.99,
            thumbnail: 'https://leantec.es/wp-content/uploads/2018/02/p_1_4_9_3_1493-Timer-precision-Oscilador-555-NE555-NE555P-DIP-8.jpg'
        });

        // Existe, retorna el objeto
        await fileName.getById(2);

        // Devuelvo un array de objetos
        await fileName.getAll();

        // Genero el archivo nuevamente sin el objeto con id 3
        await fileName.deleteById(3);

        // Borro todo el contenido del archivo
        await fileName.deleteAll();
  }

  withOrder();