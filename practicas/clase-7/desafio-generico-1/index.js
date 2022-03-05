const express = require('express');

const app = express();
const port = 8080;
const frase = "Hola mundo como estan"

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.get('/api/frase', (req, res) => {
    res.type('json');
    res.send([{ 'frase': `${frase}`}]);
});

app.get('/api/letras/:num', (req, res) => {
    const fraseWithoutSpaces = frase.split(' ').join('');
    const num = Number(req.params.num);

    if (num > fraseWithoutSpaces.length || num < 1 || isNaN(num)) { // isNaN: verifica que el valor NO sea numerico
        res.type('json');
        return res.send([{error: 'Parametro con formato invalido o fuera de rango.'}]); // https://poopcode.com/error-err_http_headers_sent-cannot-set-headers-after-they-are-sent-to-the-client-how-to-fix/
    }

    res.type('json');
    // res.send([{ 'letra': `${fraseWithoutSpaces[num - 1]}`}]); // usando la posicion del string: string[1] = t
    res.send([{ 'letra': `${fraseWithoutSpaces.charAt(num - 1)}`}]); // usando el metodo charAt
});

app.get('/api/palabras/:num', (req, res) => {
    const fraseToSplit = frase.split(' ');
    const num = Number(req.params.num);

    if (num > fraseToSplit.length || num < 1 || isNaN(num)) {
        res.type('json');
        return res.send([{error: 'Parametro con formato invalido o fuera de rango.'}]);
    }

    res.type('json');
    res.send([{ 'Palabra': `${fraseToSplit[num - 1]}`}]);
});