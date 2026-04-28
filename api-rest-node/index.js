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
app.get("/probando", (req, res) =>{
    console.log("Se esta ejecutando el endpoint probando");
    return res.status(200).json({
        endpoint: "prueba"
    })
})


// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+ puerto)
});