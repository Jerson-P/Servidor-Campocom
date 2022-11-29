const express = require('express');
const router = express.Router();
const ActividadController = require('../controllers/actividadController');


//api/actividad
router.post('/', ActividadController.crearActividad);
router.get('/', ActividadController.ObtenerActividad);
router.put('/:id', ActividadController.actualizarActividad);
router.get('/:id', ActividadController.obtenerActivida);
router.delete('/:id', ActividadController.eliminarActividad);


module.exports = router;