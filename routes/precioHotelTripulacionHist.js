const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioHotelTripulacionHist');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/hotelTripulacionHist', crearPrecio);

router.get('/hotelTripulacionHist', getPrecio);

router.put('/hotelTripulacionHist/:id', actualizarPrecio);

router.delete('/hotelTripulacionHist/:id', borrarPrecios);




module.exports = router;