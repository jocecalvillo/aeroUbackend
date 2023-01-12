const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');

const { validarJWT } = require('../middleware/validar-jwt');
const { getEfr, getGgl, getLfr, getLrc, getUyr } = require('../controller/summaryMatriculas')

const router = Router();


router.get('/xaEfr', getEfr);
router.get('/xaGgl', getGgl);
router.get('/xaLfr', getLfr);
router.get('/xaLrc', getLrc);
router.get('/xaUyr', getUyr);


module.exports = router;