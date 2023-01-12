const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPersonalRampaHist');
const { validarJWT } = require('../middleware/validar-jwt');


const router = Router();

router.post('/personalRampaHist', crearPrecio);

router.get('/personalRampaHist', getPrecio);

router.put('/personalRampaHist/:id', actualizarPrecio);

router.delete('/personalRampaHist/:id', borrarPrecios);



module.exports = router;