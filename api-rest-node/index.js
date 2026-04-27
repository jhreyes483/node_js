const  { conection } = require("./database/conection.js");
const  express = require("express");
const cors = require("cors")

// conectar a la db
conection();

// Crear servidor de node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json());

// Crear rutas


// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+ puerto)
});