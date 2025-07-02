// app.js
const express = require('express');
const cors = require('cors');
const conectarBD = require('./configuracion/bd');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./rutas/usuario.ruta'));
app.use('/api/productos', require('./rutas/producto.ruta'));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API RESTful de ejemplo con autenticación y roles');
});

// Conectar a la base de datos y arrancar el servidor
const PORT = process.env.PORT || 4000;
conectarBD().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}); 