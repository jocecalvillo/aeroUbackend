const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioAterizajeCam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/aterrizajeCam', crearPrecio);

router.get('/aterrizajeCam', getPrecio);

router.put('/aterrizajeCam/:id', actualizarPrecio);

router.delete('/aterrizajeCam/:id', borrarPrecios);




module.exports = router;