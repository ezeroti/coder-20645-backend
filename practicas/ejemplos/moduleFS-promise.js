const fs = require('fs');

// READ: then & catch
const readFileWithPromiseTC = (fileName) => {
    fs.promises.readFile(fileName, 'utf-8')
        .then (fileName => {
            console.log(fileName);
        })
        .catch (err => {
            console.log(err);
        })
};
readFileWithPromiseTC("prueba.txt");

// READ: async & await
const readFileWithPromiseAA = async (fileName) => {
    try {
        console.log(await fs.promises.readFile(fileName, 'utf-8'));
    } catch (err) {
        console.log(err);
    }
};
readFileWithPromiseAA("prueba2.txt");

// Write: async & await
const writeFileWithPromiseAA = async (fileName) => {
    try {
        console.log(await fs.promises.writeFile(fileName, 'DALE BOQUITA!','utf-8'));
    } catch (err) {
        console.log(err);
    }
};
writeFileWithPromiseAA("writeFileWithPromiseAA.txt");