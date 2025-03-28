const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Pet shop snoopy' });
});

const cliente = require('./controller/controllercliente')
const pedido = require('./controller/controllerpedido')
const telefone = require('./controller/controllertelefone')

routes.post('/cliente', cliente.create);
routes.get('/cliente', cliente.read);
routes.put('/cliente/:id', cliente.update);
routes.delete('/cliente/:id', cliente.remove);

routes.post('/pedido', pedido.create);
routes.get('/pedido', pedido.read);
routes.get('/pedido/:id', pedido.readOne);
routes.put('/pedido/:id', pedido.update);
routes.delete('/pedido/:id', pedido.remove);

routes.post('/telefone', telefone.create);
routes.get('/telefone', telefone.read);
routes.put('/telefone/:id', telefone.update);
routes.delete('/telefone/:id', telefone.remove);

module.exports = routes;