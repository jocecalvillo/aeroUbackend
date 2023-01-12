const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPersonalAlmacen');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/personalAlmacen', crearPrecio);

router.get('/personalAlmacen', getPrecio);

router.put('/personalAlmacen/:id', actualizarPrecio);

router.delete('/personalAlmacen/:id', borrarPrecios);




module.exports = router;