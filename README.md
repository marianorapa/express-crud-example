## Ejemplo aplicación CRUD con Node.js y Express
API REST sencilla con funciones CRUD y persistencia a base de datos relacional.

### Configuración
Clonar el proyecto y crear un archivo `.env` tomando como plantilla `.env.example`.

#### Base de datos
Si vas a correr el proyecto local (en tu equipo). Vas a necesitar instalar postgresql. Una vez instalado, cambiale la password del administrador de la siguiente manera 

```bash
sudo -u postgres psql
\password postgres
\q
```
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

Ahora, si queremos Dockerizarlo (pensando en subirlo a la nube y que esté disponible para cualquier caso), también está el dockerfile.

```Dockerfile
FROM node:current-alpine3.13
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
```

Una vez que entienden el contenido, crean la imagen docker. 
```bash
docker build . -t mynode:latest
```

