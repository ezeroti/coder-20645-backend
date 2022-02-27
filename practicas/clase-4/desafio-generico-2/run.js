const fs = require('fs');

const readTxtFile = (fileName) => {
    fs.promises.readFile(fileName, 'utf-8')
        .then (fileName => {
            const objectTxtFile = JSON.parse(fileName);
            console.log(objectTxtFile);
            objectTxtFile.contenidoObj.author = 'Coderhouse'
            modifyAuthor(JSON.stringify(objectTxtFile, null, 2));
        })
        .catch (err => {
            console.log(err);
        })
};

const modifyAuthor = (string) => {
    fs.promises.writeFile('package.json.coder', string, 'utf-8')
        .then (() => {
            console.log('Archivo guardado!');
        })
};

readTxtFile("info.txt");