const express = require('express');
const router = express.Router();
const productoControlador = require('../controladores/producto.controlador');
const autenticar = require('../intermedios/autenticacion.intermedio');
const verificarRol = require('../intermedios/rol.intermedio');

// Solo admin puede crear, actualizar y eliminar productos
router.post('/', autenticar, verificarRol(['admin']), productoControlador.crearProducto);
router.put('/:id', autenticar, verificarRol(['admin']), productoControlador.actualizarProducto);
router.delete('/:id', autenticar, verificarRol(['admin']), productoControlador.eliminarProducto);

// Usuarios autenticados pueden ver productos
router.get('/', autenticar, productoControlador.obtenerProductos);
router.get('/:id', autenticar, productoControlador.obtenerProductoPorId);

module.exports = router; 