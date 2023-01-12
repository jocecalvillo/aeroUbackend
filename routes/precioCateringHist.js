const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioCateringHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/cateringHist', crearPrecio);

router.get('/cateringHist', getPrecio);

router.put('/cateringHist/:id', actualizarPrecio);

router.delete('/cateringHist/:id', borrarPrecios);


module.exports = router;