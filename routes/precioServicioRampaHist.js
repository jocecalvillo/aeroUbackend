const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioServicioRampaHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/servicioRampaHist', crearPrecio);

router.get('/servicioRampaHist', getPrecio);

router.put('/servicioRampaHist/:id', actualizarPrecio);

router.delete('/servicioRampaHist/:id', borrarPrecios);




module.exports = router;