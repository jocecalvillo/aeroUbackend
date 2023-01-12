const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioRentaAlmacen');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/rentaEquipo', crearPrecio);

router.get('/rentaEquipo', getPrecio);

router.put('/rentaEquipo/:id', actualizarPrecio);

router.delete('/rentaEquipo/:id', borrarPrecios);




module.exports = router;