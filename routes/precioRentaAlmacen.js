const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioRentaAlmacen');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/rentaAlmacen', crearPrecio);

router.get('/rentaAlmacen', getPrecio);

router.put('/rentaAlmacen/:id', actualizarPrecio);

router.delete('/rentaAlmacen/:id', borrarPrecios);




module.exports = router;