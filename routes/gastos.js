const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastosController');


//api/actividad
router.post('/', gastosController.crearGasto);
router.get('/', gastosController.ObtenerGastos);
router.put('/:id', gastosController.actualizarGastos);
router.get('/:id', gastosController.obtenerGasto);
router.delete('/:id', gastosController.eliminarGasto);


module.exports = router;