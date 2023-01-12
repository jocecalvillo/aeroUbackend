const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioMigracionCam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/migracionCam', crearPrecio);

router.get('/migracionCam', getPrecio);

router.put('/migracionCam/:id', actualizarPrecio);

router.delete('/migracionCam/:id', borrarPrecios);




module.exports = router;