const express = require("express");
const router = express.Router();
const Controller = require("../controllers/article.js");

// Rutas de prueba
router.get("/ruta-de-prueba", Controller.prueba);

module.exports = router;


