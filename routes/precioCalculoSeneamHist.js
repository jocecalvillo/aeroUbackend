const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioCalculoSeneam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/calculoSeneamHist', crearPrecio);

router.get('/calculoSeneamHist', getPrecio);

router.put('/calculoSeneamHist/:id', actualizarPrecio);

router.delete('/calculoSeneamHist/:id', borrarPrecios);


module.exports = router;