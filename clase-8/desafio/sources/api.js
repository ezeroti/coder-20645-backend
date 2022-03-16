const router = require('./server.js');

const Productos = [
    {
      "title": "Capacitor Electrolitico - 1000mF x 25V",
      "price": 125.5,
      "thumbnail": "https://leantec.es/wp-content/uploads/2018/02/p_1_6_7_7_1677-Condensador-electrolitico-1000uF-25V.jpg",
      "id": 1
    },
    {
      "title": "Regulador de tension LM7818 - 18V x 1.5A",
      "price": 322.99,
      "thumbnail": "https://leantec.es/wp-content/uploads/2018/02/p_1_4_6_7_1467-Regulador-tension-L7818CV-LM7818-7818-18V-1.5A-TO-220.jpg",
      "id": 2
    },
    {
      "title": "Timer NE555 DIP-8",
      "price": 518.5,
      "thumbnail": "https://leantec.es/wp-content/uploads/2018/02/p_1_4_9_3_1493-Timer-precision-Oscilador-555-NE555-NE555P-DIP-8.jpg",
      "id": 3
    }
];

const checkIndex = (index) => { if (Productos.find(prod => prod.id === index)) { return false } else { return true } };
const findIndex = (num) => { return Productos.findIndex(prodIndex => prodIndex.id === num) };

router.get('/', (req, res) => {
  res.send(Productos);
});

router.get('/:id', (req, res) => {
  const num = Number(req.params.id);

  if((checkIndex(num))){
    return res.send({error: 'Producto no encontrado.'});
  };

  res.type('json');
  res.send(Productos[req.params.id - 1]);
});

router.post('/', (req, res) => {
  const lastID = Productos[Productos.length - 1].id;
  if(!req.body['id']){
        req.body['id'] = lastID + 1;
  };
  Productos.push(req.body);
  res.send(req.body);
});

router.put('/:id', (req, res) => {
  const num = Number(req.params.id);

  if((checkIndex(num))){
    return res.send({error: 'Producto no encontrado.'});
  };

  req.body['id'] = num;
  Productos[findIndex(num)] = req.body; // Agregando el objecto a una posicion especifica del array.
  // Productos.splice(findIndex(num), 1, req.body); // Utilizando splice

  res.send({info: 'PUT OK'});
});

router.delete('/:id', (req, res) => {
  const num = Number(req.params.id);

  if((checkIndex(num))){
    return res.send({error: 'Producto no encontrado.'});
  };

  Productos.splice(findIndex(num), 1);
  res.send({info: 'DELETE OK'});
});
