const fs = require('fs');

// Read
const read = name => fs.readFile(name, 'utf-8', (err, data) => {
    if (err) {
        console.log(`no puedo leer el archivo: ${err}`);
    } else {
        console.log(`Contenido del archivo: ${data}`);
    }
});

// Write
const write = name => fs.writeFile(name, 'PRUEBA FUNCION ASYNC\n', 'utf-8', err => {
    if (err) {
        console.log(`no puedo escribir el archivo: ${err}`);
    } else {
        console.log(`Archivo guardado!`);
    }
});


// Append
const append = name => fs.appendFile(name, 'PRUEBA FUNCION APPEND ASYNC\n', 'utf-8', err => {
    if (err) {
        console.log(`no puedo escribir el archivo: ${err}`);
    } else {
        console.log(`Info agregada!`);
    }
});

// Read Dir
const readDir = name => fs.readdir(name, (err, data) => {
    if (err) {
        console.log(`no puedo leer el directorio: ${err}`);
    } else {
        console.log(data);
    }
})


read('prueba.txt');
write('pruebaAsync.txt');
append('pruebaAsync.txt');
readDir('/tmp');