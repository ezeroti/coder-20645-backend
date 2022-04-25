const { router, app } = require('./server.js');
const { Productos } = require('./objects.js');

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
  const lastID = () => { if (Productos.length < 1) {
      return 0;
    } else {
      return Productos[Productos.length - 1].id 
    };
  } 
  if(!req.body['id']){
        req.body['id'] = lastID() + 1;
  };
  Productos.push(req.body);
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

app.get('/', (req, res) => {
  const amount = () => {if (Productos.length < 1) { return false } else { return true }};
  res.render('index', { listProducts: Productos, ifExists: amount() });
});