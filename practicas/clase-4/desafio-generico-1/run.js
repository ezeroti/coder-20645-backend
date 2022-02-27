const fs = require('fs');

const readJson = name => fs.readFile(name, 'utf-8', (err, data) => {
    if (err) {
        console.log(`no puedo leer el archivo: ${err}`);
    } else {
        const info = {
            contenidoStr: JSON.stringify(data), // convierte a string  (serializo un objeto)
            contenidoObj: JSON.parse(data), // convierte string en object (deserializo un string)
            size: fs.statSync(name).size // tamanio en bytes del archivo json
        }
        console.log(info);
        writeInfo(JSON.stringify(info, null, 2));
    }
});

const writeInfo = dataJson => fs.writeFile('info.txt', dataJson, 'utf-8', err => {
    if (err) throw new Error(`No se pudo escribir el archivo: ${err.message}`);
});

readJson('package.json');