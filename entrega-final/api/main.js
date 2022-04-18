const { prod } = require('../routers/prod.js');
const { cart } = require('../routers/cart.js');
const { Productos, Carritos } = require('../source/dataObjects.js');
const { Cart } = require('../source/classes.js')
const moment = require('moment');

const checkIndex = (index,obj) => { if (obj.find(item => item.id === index)) { return false } else { return true } };
const findIndex = (index,obj) => { return obj.findIndex(objIndex => objIndex.id === index) };
const getTimestamp = () => { return moment().format("DD.MM.YYYY@hh:mm:ss") };
const isPathExist = (req, res) => {res.status(404).send({ 'error' : -2, 'descripcion': `ruta ${req.baseUrl + req.path} método ${req.method} no implementado` });};
const lastID = (obj) => { if (obj.length < 1) {
  return 0;
} else {
  return obj[obj.length - 1].id };
}; 
const isAdmin = (req, res, next) => {
  const admin =  req.query.admin;
  if(admin === 'true') {
    next();
  } else {
    res.status(403).send({ 'error' : -1, 'descripcion': `ruta ${req.baseUrl + req.path} método ${req.method} no autorizado` });
  }
};

// /api/productos

prod.get('/', (req, res) => {
  const num = Number(req.query.id);
  if(num) {
    if(checkIndex(num,Productos)){
      return res.send({error: 'Producto no encontrado.'});
    };
    res.send(Productos[num - 1]);
  } else {
    res.send(Productos);
  }
});

prod.post('/', isAdmin, (req, res) => {
  if(!req.body['id']){
        req.body['id'] = lastID(Productos) + 1;
  };
  Productos.push(req.body);
  res.send({info: 'POST OK'});
});

prod.put('/', isAdmin, (req, res) => {
  const num = Number(req.query.id);
  if(checkIndex(num,Productos)){
    return res.send({error: 'Producto no encontrado.'});
  };
  req.body['id'] = num;
  Productos[findIndex(num,Productos)] = req.body;
  res.send({info: 'PUT OK'});
});

prod.delete('/', isAdmin, (req, res) => {
  const num = Number(req.query.id);
  if(checkIndex(num,Productos)){
    return res.send({error: 'Producto no encontrado.'});
  };
  Productos.splice(findIndex(num,Productos), 1);
  res.send({info: 'DELETE OK'});
});


// /api/productos
cart.get('/', (req, res) => {
  res.send(Carritos)
});


cart.get('/:id?/:path?', (req, res) => {
  const id = Number(req.params.id);
  const path = req.params.path;
  if(path === 'productos') {
    if(id && id != 0 && !checkIndex(id,Carritos)) {
      res.send(Carritos[id - 1].productos);
    } else {
      return res.send({error: 'Carrito no encontrado.'});
    };
  } else {
    isPathExist(req, res);
  }
});

cart.post('/:id?/:path?/:idProd?', (req, res) => {
  const id = Number(req.params.id);
  const path = req.params.path;
  const idProd = Number(req.params.idProd);
  if(!id && id != 0) {
    const cartId = Number(lastID(Carritos)) + 1;
    new Cart(cartId,getTimestamp()).createCart();
    res.send({info: `Carrito ID: ${cartId}`});
  } else {
    if(path === 'productos' && idProd){
      if(!checkIndex(id,Carritos)){
        Carritos[id - 1].productos.push(Productos[idProd - 1])
        res.send({info: 'POST OK'});
      } else {
        return res.send({error: 'Carrito no encontrado.'});
      };
    } else {
      isPathExist(req, res);
    }    
  }
});

cart.delete('/:id?', (req, res) => {
  const id = Number(req.params.id);
  if(id && id != 0 && !checkIndex(id,Carritos)) {
    Carritos.splice(findIndex(id,Carritos), 1);
    res.send({info: 'DELETE OK'});
  } else {
    return res.send({error: 'Carrito no encontrado.'});
  };
});