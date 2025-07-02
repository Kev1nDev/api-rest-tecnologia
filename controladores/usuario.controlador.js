const Usuario = require('../modelos/usuario.modelo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Registrar usuario
exports.registrar = async (req, res) => {
  try {
    const { nombre_usuario, contraseña, rol } = req.body;
    const usuarioExistente = await Usuario.findOne({ nombre_usuario });
    if (usuarioExistente) return res.status(400).json({ mensaje: 'El usuario ya existe' });
    const hash = await bcrypt.hash(contraseña, 10);
    const usuario = new Usuario({ nombre_usuario, contraseña: hash, rol });
    await usuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en el registro', error: err.message });
  }
};

// Login usuario
exports.login = async (req, res) => {
  try {
    const { nombre_usuario, contraseña } = req.body;
    const usuario = await Usuario.findOne({ nombre_usuario });
    if (!usuario) return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
    const esValido = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!esValido) return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
    const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRETO, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: usuario._id }, process.env.JWT_REFRESH_SECRETO, { expiresIn: '7d' });
    res.json({ token, refreshToken });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en el login', error: err.message });
  }
};

// Renovar token
exports.renovarToken = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ mensaje: 'Refresh token requerido' });
  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRETO, (err, usuario) => {
    if (err) return res.status(403).json({ mensaje: 'Refresh token inválido' });
    const nuevoToken = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRETO, { expiresIn: '15m' });
    res.json({ token: nuevoToken });
  });
}; 