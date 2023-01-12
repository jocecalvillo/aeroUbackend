const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPersonalAlmacenHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/personalAlmacenHist', crearPrecio);

router.get('/personalAlmacenHist', getPrecio);

router.put('/personalAlmacenHist/:id', actualizarPrecio);

router.delete('/personalAlmacenHist/:id', borrarPrecios);




module.exports = router;