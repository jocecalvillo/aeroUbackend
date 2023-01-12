const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioViaticosHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/viaticosHist', crearPrecio);

router.get('/viaticosHist', getPrecio);

router.put('/viaticosHist/:id', actualizarPrecio);

router.delete('/viaticosHist/:id', borrarPrecios);


module.exports = router;