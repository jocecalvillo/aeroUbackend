const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSupervicionDespachoHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/supervicionDespachoHist', crearPrecio);

router.get('/supervicionDespachoHist', getPrecio);

router.put('/supervicionDespachoHist/:id', actualizarPrecio);

router.delete('/supervicionDespachoHist/:id', borrarPrecios);


module.exports = router;