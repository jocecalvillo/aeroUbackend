const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioMantenimientoHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/mantenimientoHist', crearPrecio);

router.get('/mantenimientoHist', getPrecio);

router.put('/mantenimientoHist/:id', actualizarPrecio);

router.delete('/mantenimientoHist/:id', borrarPrecios);




module.exports = router;