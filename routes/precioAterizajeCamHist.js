const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioAterizajeCamHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/aterrizajeCamHist', crearPrecio);

router.get('/aterrizajeCamHist', getPrecio);

router.put('/aterrizajeCamHist/:id', actualizarPrecio);

router.delete('/aterrizajeCamHist/:id', borrarPrecios);




module.exports = router;