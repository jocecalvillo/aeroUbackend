const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioCalculoSeneam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/calculoSeneam', crearPrecio);

router.get('/calculoSeneam', getPrecio);

router.put('/calculoSeneam/:id', actualizarPrecio);

router.delete('/calculoSeneam/:id', borrarPrecios);


module.exports = router;