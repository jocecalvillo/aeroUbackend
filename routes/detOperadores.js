const { Router } = require('express');
const { check } = require('express-validator');

const { validaJWT } = require('../middleware/validar-jwt');

const { leerExcel, getdetOperadores, creardetOperadores, actualizardetOperadores, eliminardetOperadores } = require('../controller/detOperadores');


const router = Router();

router.get("/obtenerOperadores", getdetOperadores);

router.post("/crearOperadores", creardetOperadores);

router.post("/excel", leerExcel);

router.put("/actualizarOperadores/:id", actualizardetOperadores);

router.delete("/eliminarOperadores/:id", eliminardetOperadores);


module.exports = router;