const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioMotoresHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/motoresHist', crearPrecio);

router.get('/motoresHist', getPrecio);

router.put('/motoresHist/:id', actualizarPrecio);

router.delete('/motoresHist/:id', borrarPrecios);




module.exports = router;