const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioMantenimiento');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/mantenimiento', crearPrecio);

router.get('/mantenimiento', getPrecio);

router.put('/mantenimiento/:id', actualizarPrecio);

router.delete('/mantenimiento/:id', borrarPrecios);




module.exports = router;