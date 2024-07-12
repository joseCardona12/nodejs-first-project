// const express = require("express");
// const taskRoutes = require("./routes/tasks"); 
// const errorHandler = require("./middlewares/errorHandler");

// const app = express(); // Instanciar express
// const PORT = 3000;

// app.use(express.json()); // Middleware de aplicacion - Parsear el cuerpo de las solicitudes a formatos Json
// app.use("/tasks", taskRoutes); // Middleware para manejar las rutas de la API - Middleware de montaje o de enrutamiento
// app.use(errorHandler); // Middleware para maneajr los errores

// app.listen(PORT,()=>{
//     console.log(`Server running at http://localhost:${PORT}`);
// })

const express = require("express"); // Importamos Express
const tasksRoutes = require("./routes/tasks"); // Importamos las rutas de la API
const errorHandler = require("./middlewares/errorHandler"); // Importamos el middleware para manejo de errores

const app = express(); // Instanciamos Express
const PORT = 3000; // Puerto del servidor en donde se ejecutará la API

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes en formato JSON. Tambien conocido como middleware de aplicación.
app.use("/tasks", tasksRoutes); // Middleware para manejar las rutas de la API. Tambien conocido como middleware de montaje o de enrutamiento.
app.use(errorHandler); // Middleware para manejar errores.

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});