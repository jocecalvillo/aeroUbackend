const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioSupervicionDespachoCam');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/supervicionDespachoCam', crearPrecio);

router.get('/supervicionDespachoCam', getPrecio);

router.put('/supervicionDespachoCam/:id', actualizarPrecio);

router.delete('/supervicionDespachoCam/:id', borrarPrecios);


module.exports = router;