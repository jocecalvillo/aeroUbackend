const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPersonalRampa');
const { validarJWT } = require('../middleware/validar-jwt');


const router = Router();

router.post('/personalRampa', crearPrecio);

router.get('/personalRampa', getPrecio);

router.put('/personalRampa/:id', actualizarPrecio);

router.delete('/personalRampa/:id', borrarPrecios);



module.exports = router;