const app = require('./sources/express.js');

const frase = 'Frase inicial';
const fraseToSplit = frase.split(' ');

const checkArray = (value, num) => { if (num > value.length || num < 1 || isNaN(num)) { return true } };

app.get('/api/frase', (req, res) => { res.send({ frase: `${frase}`})});

app.get('/api/palabras/:pos', (req, res) => { 

    const num = Number(req.params.pos);

    if((checkArray(fraseToSplit, num))){
        return res.send({error: 'Parametro con formato invalido o fuera de rango.'});
    };

    res.send({ Buscada: `${fraseToSplit[num - 1]}`}) 
});

app.post('/api/palabras', (req, res) => {

    const palabra = req.body.palabra;
    const nuevaFrase = `${frase} ${palabra}`;

    res.send({ 
        agregada: `${palabra}`,
        pos: `${nuevaFrase.split(' ').indexOf(palabra) + 1}`
    });
    
});

app.put('/api/palabras/:pos', (req, res) => {

    const palabra = req.body.palabra;
    const num = Number(req.params.pos);

    if((checkArray(fraseToSplit.map(Number), num))){
        return res.send({error: 'Parametro con formato invalido o fuera de rango.'});
    };

    res.send({ 
        actualizada: `${palabra}`,
        anterior: `${fraseToSplit[num - 1]}`
    });
    
});

app.delete('/api/palabras/:pos', (req, res) => {

    const num = Number(req.params.pos);

    if((checkArray(fraseToSplit.map(Number), num))){
        return res.send({error: 'Parametro con formato invalido o fuera de rango.'});
    };
 
    res.send({ 
        eliminada: `${fraseToSplit.splice(num - 1,1)}`,
        queda: `${fraseToSplit}`
    });
    
});
