const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioMotores');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/motores', crearPrecio);

router.get('/motores', getPrecio);

router.put('/motores/:id', actualizarPrecio);

router.delete('/motores/:id', borrarPrecios);




module.exports = router;