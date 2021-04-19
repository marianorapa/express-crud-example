## Ejemplo aplicación CRUD con Node.js y Express
API REST sencilla con funciones CRUD y persistencia a base de datos relacional.

### Configuración
Clonar el proyecto y crear un archivo `.env` tomando como plantilla `.env.example`.

#### Base de datos
Crear una base de datos cuyo nombre coincida con la propiedad `DB_NAME` del archivo `.env`. Si el valor de la propiedad `NODE_ENV` es `development`, las tablas se crearán automáticamente al ejecutar el proyecto.

### Ejecución
Para ejecutar la aplicación, primero instalamos las dependencias:
```
npm install
```

Y luego, ejecutamos el proyecto:
```
npm start
```

