const express = require('express');
const router = express.Router();
const tecnicoController = require('../controllers/tecnicoController');


//api/actividad
router.post('/', tecnicoController.crearTecnicos);
router.get('/', tecnicoController.ObtenerTecnico);
router.put('/:id', tecnicoController.ActualizarTecnico);
router.get('/:id', tecnicoController.obtenerTecnicos);
router.delete('/:id', tecnicoController.eliminarTecnico);



module.exports = router;