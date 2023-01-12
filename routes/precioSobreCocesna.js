const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSobreCocesna');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/sobreCocesna', crearPrecio);

router.get('/sobreCocesna', getPrecio);

router.put('/sobreCocesna/:id', actualizarPrecio);

router.delete('/sobreCocesna/:id', borrarPrecios);


module.exports = router;