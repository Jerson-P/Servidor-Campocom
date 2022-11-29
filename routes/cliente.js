const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController')

//api/clientes
router.post('/', clienteController.crearCliente);
router.get('/', clienteController.ObtenerCliente)
router.put('/:id', clienteController.actualizarCliente);
router.get('/:id', clienteController.obtenerclientes);
router.delete('/:id', clienteController.eliminarCliente);


module.exports = router;