const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioMigracionCamHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/migracionCamHist', crearPrecio);

router.get('/migracionCamHist', getPrecio);

router.put('/migracionCamHist/:id', actualizarPrecio);

router.delete('/migracionCamHist/:id', borrarPrecios);




module.exports = router;