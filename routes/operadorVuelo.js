const { Router } = require('express');
const { check } = require('express-validator');

const { validaJWT } = require('../middleware/validar-jwt');
const { getOperVuelo, crearOperVuelo, actualizarOperVuelo, eliminarOperVuelo, leerExcel } = require('../controller/operadorVuelo');

const router = Router();

router.get("/", getOperVuelo);

router.post("/crearOpVuelo", crearOperVuelo);

router.post("/excel", leerExcel);

router.put("/actualizarOpVuelo/:id", actualizarOperVuelo);

router.delete("/eliminarOpVuelo/:id", eliminarOperVuelo);


module.exports = router;