const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/preciosAterizajeMexHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/aterrizajeMexHist', crearPrecio);

router.get('/aterrizajeMexHist', getPrecio);

router.put('/aterrizajeMexHist/:id', actualizarPrecio);

router.delete('/aterrizajeMexHist/:id', borrarPrecios);




module.exports = router;