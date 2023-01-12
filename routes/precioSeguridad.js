const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSeguridad');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/seguridad', crearPrecio);

router.get('/seguridad', getPrecio);

router.put('/seguridad/:id', actualizarPrecio);

router.delete('/seguridad/:id', borrarPrecios);




module.exports = router;