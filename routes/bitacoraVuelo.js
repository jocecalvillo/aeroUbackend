const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { leerExcel, getXaefr, getXaggl, getXalfr, getXalrc, getXauyr, crearXaefr, crearXaggl, crearXalfr, crearXalrc, crearXauyr } = require('../controller/bitacoraVuelo');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/excel', leerExcel);

router.get('/efr',
    //validarJWT,
    getXaefr);

router.post('/efr',
    //validarJWT,
    crearXaefr);

router.get('/ggl',
    //validarJWT,
    getXaggl);

router.post('/ggl',
    //validarJWT,
    crearXaggl);

router.get('/lfr',
    //validarJWT,
    getXalfr);

router.post('/lfr',
    //validarJWT,
    crearXalfr);

router.get('/lrc',
    //validarJWT,
    getXalrc);

router.post('/lrc',
    //validarJWT,
    crearXalrc);

router.get('/uyr',
    //validarJWT,
    getXauyr);

router.post('/uyr',
    //validarJWT,
    crearXauyr);

module.exports = router;