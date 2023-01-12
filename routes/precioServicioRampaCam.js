const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioServicioRampaCam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/servicioRampaCam', crearPrecio);

router.get('/servicioRampaCam', getPrecio);

router.put('/servicioRampaCam/:id', actualizarPrecio);

router.delete('/servicioRampaCam/:id', borrarPrecios);




module.exports = router;