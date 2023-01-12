const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPlataformaCam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/plataformaCam', crearPrecio);

router.get('/plataformaCam', getPrecio);

router.put('/plataformaCam/:id', actualizarPrecio);

router.delete('/plataformaCam/:id', borrarPrecios);




module.exports = router;