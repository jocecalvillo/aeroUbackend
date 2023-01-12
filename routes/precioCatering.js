const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioCatering');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/catering', crearPrecio);

router.get('/catering', getPrecio);

router.put('/catering/:id', actualizarPrecio);

router.delete('/catering/:id', borrarPrecios);


module.exports = router;