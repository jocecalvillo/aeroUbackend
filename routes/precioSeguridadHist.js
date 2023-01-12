const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSeguridadHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/seguridadHist', crearPrecio);

router.get('/seguridadHist', getPrecio);

router.put('/seguridadHist/:id', actualizarPrecio);

router.delete('/seguridadHist/:id', borrarPrecios);




module.exports = router;