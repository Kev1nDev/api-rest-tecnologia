# API RESTful de Productos con Autenticación JWT y Roles
# Kevin Romero 

Este proyecto es una API RESTful desarrollada en Node.js y Express, conectada a MongoDB, que permite la gestión de productos y usuarios con autenticación basada en JWT y control de acceso por roles (admin y usuario).

## Características
- Registro e inicio de sesión de usuarios
- Autenticación con JWT y refresh tokens
- CRUD de productos
- Control de acceso por roles (admin y usuario)
- Estructura modular y en español
- **Aplicación web de prueba incluida**

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

## Aplicación de Prueba

El proyecto incluye una aplicación web de prueba que te permite probar todas las funcionalidades de la API de forma visual:

### Acceder a la aplicación de prueba:
- **URL:** http://localhost:4000/test
- **Características:**
  - Interfaz gráfica moderna y responsive
  - Registro e inicio de sesión de usuarios
  - Gestión de productos (crear, ver)
  - Pruebas de roles y permisos
  - Renovación de tokens
  - Visualización de respuestas en tiempo real

### Funcionalidades de la aplicación de prueba:
- ✅ **Registro de usuarios** con selección de rol
- ✅ **Login** con obtención de tokens
- ✅ **Creación de productos** (solo admin)
- ✅ **Visualización de productos** (usuarios autenticados)
- ✅ **Renovación de tokens** automática
- ✅ **Pruebas de permisos** por roles
- ✅ **Indicador de conexión** al servidor

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

## Pruebas rápidas

### Con la aplicación web:
1. Ve a http://localhost:4000/test
2. Registra un usuario admin
3. Inicia sesión
4. Prueba crear y ver productos

### Con curl:
```bash
# Registrar admin
curl -X POST http://localhost:4000/api/usuarios/registro \
  -H "Content-Type: application/json" \
  -d '{"nombre_usuario":"admin","contraseña":"admin123","rol":"admin"}'

# Login
curl -X POST http://localhost:4000/api/usuarios/login \
  -H "Content-Type: application/json" \
  -d '{"nombre_usuario":"admin","contraseña":"admin123"}'
```

## Notas
- Asegúrate de tener MongoDB corriendo localmente o usa una URI de MongoDB Atlas.
- Cambia los secretos JWT en producción.
- La aplicación de prueba está disponible en `/test` cuando el servidor esté corriendo.

---

¡Listo para usar y modificar según tus necesidades! 