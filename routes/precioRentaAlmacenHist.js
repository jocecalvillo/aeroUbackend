const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioRentaAlmacenHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/rentaAlmacenHist', crearPrecio);

router.get('/rentaAlmacenHist', getPrecio);

router.put('/rentaAlmacenHist/:id', actualizarPrecio);

router.delete('/rentaAlmacenHist/:id', borrarPrecios);




module.exports = router;