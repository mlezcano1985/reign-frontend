# Demo Aplicación SPA con Angular 8 y Angular Material

# Descripción
Simple aplicación desarrollada con Angular 8. Cuenta con 2 funcionalidades:
- GET: `articles/node`: Muestra información asociada a artículos relacionados con NodeJS.
- DELETE: `articles/node/:id`: Elimina un artículo dado su id.

Los servicios de estas funcionalidades están definidos en la [app backend](https://github.com/mlezcano1985/reign-backend) de este demo.

# Cómo empezar?
- Clonar o descargar el repositorio.
- Abrir un terminal en la raíz del proyecto.

# Ejecutar con Docker
- Instalar [Docker](https://docs.docker.com/compose/install/) en dependencia de su sistema operativo.
- Abrir un terminal en la raíz del proyecto.
- Ejecutar el comando `npm run start-docker` para que la se inicien la aplicación web.
- Abrir en el navegador la url: [http://localhost:4200](http://localhost:4200)

# Ejecutar sin Docker
- Instalar versión estable de [NodeJS](https://nodejs.org/es/download/).
- Instalar [Angular CLI](https://cli.angular.io/).
- Instalar dependencias usando el comando `npm install`.
- Ejecutar el comando `npm start` para que la se inicie la aplicación web.
- Abrir en el navegador la url: [http://localhost:4200](http://localhost:4200)

# Comandos disponibles
- `npm start`: Inicia la app en modo desarrollo.
- `npm run start-docker`: Inicia la app en el contenedor de docker.
