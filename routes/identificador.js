const { Router } = require('express');
const { check } = require('express-validator');
const { crearId } = require('../controller/identificador');

const router = Router();

router.get("/generarCodigo", crearId)

module.exports = router;