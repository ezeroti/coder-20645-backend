const fs = require('fs');

// Leo el contenido del archivo
const read = fs.readFileSync('prueba.txt', 'utf-8');
console.log(read);

// Escribo linea en archivo, si el mismo no existe, lo crea.
fs.writeFileSync('prueba2.txt', 'ESTA ES UNA PRUEBILLA\n','utf-8');
fs.writeFileSync('prueba3.txt', '','utf-8');

// Agrego contenido al archvio
fs.appendFileSync('prueba2.txt', 'AGREGO UNA PRUEBILLA\n', 'utf-8');

// borro archivo
fs.unlinkSync('prueba3.txt')