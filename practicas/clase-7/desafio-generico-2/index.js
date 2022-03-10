const app = require('./sources/express.js');

const sumarFunc = (num1, num2, res) => {
    res.type('json');
    res.send(`${num1} + ${num2} = ${num1 + num2}`);
}

app.get('/api/sumar/:num1/:num2', (req, res) => {
    // Para no pasar a number cada valor del params que viene del request, con [].map(Number), cambio todo el array a int
    const [num1, num2] = [req.params.num1, req.params.num2].map(Number); 

    // verifico el tipo de dato
    console.log(typeof(num1));

    sumarFunc(num1, num2, res);
});

app.get('/api/sumar', (req, res) => {
     // Al contrario del caso anterior, transformo a int cada valor del array.
    const [num1, num2] = [Number(req.query.num1), Number(req.query.num2)];

    sumarFunc(num1, num2, res);
});

app.get('/api/operacion/:oper', (req, res) => {
    // Al splitear un string, el resultado es un array con cada valor.
    const [num1, num2] = ((req.params.oper).split('+')).map(Number);

    sumarFunc(num1, num2, res);
});

app.post('/api', (req, res) => { res.send(`OK + ${req.method}`) }) // Test POST
app.put('/api', (req, res) => { res.send(`OK + ${req.method}`) }) // Test PUT 
app.delete('/api', (req, res) => { res.send(`OK + ${req.method}`) }) // Test DELETE 