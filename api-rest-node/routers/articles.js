const express = require("express");
const router = express.Router();
;
const ControllerArticle = require("../controllers/article.js");

// Rutas de prueba
router.get("/ruta-de-prueba", ControllerArticle.prueba);
router.post("/crear", ControllerArticle.create)
router.get("/articles", ControllerArticle.listar)


module.exports = router;


