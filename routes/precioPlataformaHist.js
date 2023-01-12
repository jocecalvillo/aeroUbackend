const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPlataformaHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/plataformaHist', crearPrecio);

router.get('/plataformaHist', getPrecio);

router.put('/plataformaHist/:id', actualizarPrecio);

router.delete('/plataformaHist/:id', borrarPrecios);




module.exports = router;