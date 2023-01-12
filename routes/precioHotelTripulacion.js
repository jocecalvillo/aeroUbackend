const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioHotelTripulacion');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/hotelTripulacion', crearPrecio);

router.get('/hotelTripulacion', getPrecio);

router.put('/hotelTripulacion/:id', actualizarPrecio);

router.delete('/hotelTripulacion/:id', borrarPrecios);




module.exports = router;