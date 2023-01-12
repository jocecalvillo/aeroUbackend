const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioCombustibleHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/combustibleHist', crearPrecio);

router.get('/combustibleHist', getPrecio);

router.put('/combustibleHist/:id', actualizarPrecio);

router.delete('/combustibleHist/:id', borrarPrecios);




module.exports = router;