// app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const conectarBD = require('./configuracion/bd');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api/usuarios', require('./rutas/usuario.ruta'));
app.use('/api/productos', require('./rutas/producto.ruta'));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API RESTful de ejemplo con autenticación y roles');
});

// Ruta para la aplicación de prueba
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Conectar a la base de datos y arrancar el servidor
const PORT = process.env.PORT || 4000;
conectarBD().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Aplicación de prueba disponible en: http://localhost:${PORT}/test`);
  });
}); 