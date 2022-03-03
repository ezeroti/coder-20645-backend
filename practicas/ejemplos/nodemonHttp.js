const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hola Ezequiel!');
});

const connectedServer = server.listen(8081, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});