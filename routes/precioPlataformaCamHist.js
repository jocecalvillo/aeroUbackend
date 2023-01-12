const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPlataformaCamHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/plataformaCamHist', crearPrecio);

router.get('/plataformaCamHist', getPrecio);

router.put('/plataformaCamHist/:id', actualizarPrecio);

router.delete('/plataformaCamHist/:id', borrarPrecios);




module.exports = router;