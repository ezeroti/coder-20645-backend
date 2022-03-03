const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
});

const connectedServer = server.listen(8080, () => {

        const now = moment().format("HH");
        let saludo;

        if (now >= 6 && now <= 12) {
            saludo = 'Buenos dias!';
        } else if (now >= 13 && now <= 19) {
            saludo = 'Buenos tardes!';
        } else {
            saludo = 'Buenos noches!';
        }

    console.log(`${saludo}, Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});