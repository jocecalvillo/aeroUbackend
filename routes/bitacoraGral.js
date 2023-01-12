const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { crearBitacora, getBitacora } = require('../controller/bitacoraGral');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/bitacoraGral', crearBitacora);

router.get('/bitacoraGral', getBitacora);



module.exports = router;