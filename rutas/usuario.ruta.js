const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/usuario.controlador');

router.post('/registro', usuarioControlador.registrar);
router.post('/login', usuarioControlador.login);
router.post('/renovar-token', usuarioControlador.renovarToken);

module.exports = router; 