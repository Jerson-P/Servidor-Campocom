const express = require('express');
const router = express.Router();
const ingresosController = require('../controllers/ingresosController');


//api/actividad
router.post('/', ingresosController.crearIngresos);
router.get('/', ingresosController.ObtenerIngresos);
router.put('/:id', ingresosController.actualizarIngresos);
router.get('/:id', ingresosController.obtenerIngreso);
router.delete('/:id', ingresosController.eliminarIngreso);


module.exports = router;