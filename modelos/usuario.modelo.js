const mongoose = require('mongoose');

const usuarioEsquema = new mongoose.Schema({
  nombre_usuario: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'usuario'], default: 'usuario' }
});

module.exports = mongoose.model('Usuario', usuarioEsquema); 