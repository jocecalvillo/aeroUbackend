const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioServicioRampa');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/servicioRampa', crearPrecio);

router.get('/servicioRampa', getPrecio);

router.put('/servicioRampa/:id', actualizarPrecio);

router.delete('/servicioRampa/:id', borrarPrecios);




module.exports = router;