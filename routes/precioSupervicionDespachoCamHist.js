const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSupervicionDespachoCamHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/supervicionDespachoCamHist', crearPrecio);

router.get('/supervicionDespachoCamHist', getPrecio);

router.put('/supervicionDespachoCamHist/:id', actualizarPrecio);

router.delete('/supervicionDespachoCamHist/:id', borrarPrecios);


module.exports = router;