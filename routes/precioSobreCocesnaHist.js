const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSobreCocesnaHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/sobreCocesnaHist', crearPrecio);

router.get('/sobreCocesnaHist', getPrecio);

router.put('/sobreCocesnaHist/:id', actualizarPrecio);

router.delete('/sobreCocesnaHist/:id', borrarPrecios);


module.exports = router;