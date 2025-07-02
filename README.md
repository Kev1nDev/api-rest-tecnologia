# API RESTful de Productos con Autenticación JWT y Roles

Este proyecto es una API RESTful desarrollada en Node.js y Express, conectada a MongoDB, que permite la gestión de productos y usuarios con autenticación basada en JWT y control de acceso por roles (admin y usuario).

## Características
- Registro e inicio de sesión de usuarios
- Autenticación con JWT y refresh tokens
- CRUD de productos
- Control de acceso por roles (admin y usuario)
- Estructura modular y en español

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Kev1nDev/api-rest-tecnologia.git
   cd tecnologia
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/tecnologia
   JWT_SECRETO=supersecretojwt
   JWT_REFRESH_SECRETO=supersecrerefresh
   ```
4. Inicia el servidor:
   ```bash
   node app.js
   # o con nodemon para desarrollo
   npx nodemon app.js
   ```

## Endpoints principales

### Usuarios
- `POST /api/usuarios/registro` — Registro de usuario
- `POST /api/usuarios/login` — Login y obtención de tokens
- `POST /api/usuarios/renovar-token` — Renovar token de acceso

### Productos
- `GET /api/productos` — Listar productos (requiere autenticación)
- `GET /api/productos/:id` — Ver producto por ID (requiere autenticación)
- `POST /api/productos` — Crear producto (solo admin)
- `PUT /api/productos/:id` — Actualizar producto (solo admin)
- `DELETE /api/productos/:id` — Eliminar producto (solo admin)

## Roles
- `admin`: Puede crear, editar y eliminar productos.
- `usuario`: Solo puede ver productos.

## Notas
- Asegúrate de tener MongoDB corriendo localmente o usa una URI de MongoDB Atlas.
- Cambia los secretos JWT en producción.

---

¡Listo para usar y modificar según tus necesidades! 