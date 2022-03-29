const { router } = require('./sources/express.js');

const listaMascotas = [
    {
        nombre: 'Tarzan',
        raza: 'caniche',
        edad: '5'
    }
];

const listaPersonas = [
    {
        nombre: 'Juan',
        apellido: 'Ramos',
        edad: '46'
    }
];


router.post('/mascotas', (req, res) => {
    listaMascotas.push(req.body);
    res.type('json');
    res.send('post ok');
});

router.get('/mascotas', (req, res) => {
    res.type('json');
    res.send(listaMascotas);
});
   
router.post('/personas', (req, res) => {
    listaPersonas.push(req.body);
    res.type('json');
    res.send('post ok');
});

router.get('/personas', (req, res) => {
    res.type('json');
    res.send(listaPersonas);
});