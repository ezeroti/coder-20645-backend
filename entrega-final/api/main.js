const { prod } = require('./prod.js');
const { cart } = require('./cart.js');
const { Productos } = require('../source/products.js');

const checkIndex = (index) => { if (Productos.find(prod => prod.id === index)) { return false } else { return true } };
const findIndex = (num) => { return Productos.findIndex(prodIndex => prodIndex.id === num) };
const isAdmin = (req, res, next) => {
  const admin =  req.query.admin;
  if(admin === 'true') {
    next();
  } else {
    res.status(403).send();
  }
}

prod.get('/', (req, res) => {
  const num = Number(req.query.id);
  if(num) {
    if((checkIndex(num))){
      return res.send({error: 'Producto no encontrado.'});
    };
    res.send(Productos[num - 1]);
  } else {
    res.send(Productos);
  }
});

prod.post('/', isAdmin, (req, res) => {
  const lastID = () => { if (Productos.length < 1) {
      return 0;
    } else {
      return Productos[Productos.length - 1].id };
  } 
  if(!req.body['id']){
        req.body['id'] = lastID() + 1;
  };
  Productos.push(req.body);
});

cart.get('/', (req, res) => {
  res.send(Productos);
});



prod.put('/:id', (req, res) => {
  const num = Number(req.params.id);

  if((checkIndex(num))){
    return res.send({error: 'Producto no encontrado.'});
  };

  req.body['id'] = num;
  Productos[findIndex(num)] = req.body; // Agregando el objecto a una posicion especifica del array.
  // Productos.splice(findIndex(num), 1, req.body); // Utilizando splice

  res.send({info: 'PUT OK'});
});

prod.delete('/:id', (req, res) => {
  const num = Number(req.params.id);

  if((checkIndex(num))){
    return res.send({error: 'Producto no encontrado.'});
  };

  Productos.splice(findIndex(num), 1);
  res.send({info: 'DELETE OK'});
});

//app.get('/', (req, res) => {
//  const amount = () => {if (Productos.length < 1) { return false } else { return true }};
//  res.render('index', { listProducts: Productos, ifExists: amount() });
//});