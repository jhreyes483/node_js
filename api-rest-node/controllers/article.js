const validator = require("validator")
const Article = require("../models/articles");


const prueba = (req, res) => {
    return res.status(200).json({
        msg: "Soy una accion de prueba en el controlador de articulos" 
    });
}


const controller = {

}


const create = async (req, res) => {
  try {
    // Recoger parámetros
    let { tittle, content } = req.body;

    // Validar existencia primero (evita crasheos)
    if (!tittle || !content) {
      return res.status(400).json({
        status: "error",
        mensaje: "Faltan datos por enviar"
      });
    }

    // Validaciones con validator
    let validar_titulo = !validator.isEmpty(tittle) &&
                         validator.isLength(tittle, { min: 1, max: 100 });

    let validar_contenido = !validator.isEmpty(content);

    if (!validar_titulo || !validar_contenido) {
      return res.status(400).json({
        status: "error",
        mensaje: "Datos no válidos"
      });
    }

    // Crear objeto limpio
    const articulo = new Article({
      tittle: tittle.trim(),
      content: content.trim()
    });

    // Guardar en BD
    const articuloGuardado = await articulo.save();

    return res.status(200).json({
      status: "success",
      articulo: articuloGuardado,
      mensaje: "Artículo creado con éxito"
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Error interno al guardar el artículo "+ error
    });
  }
};


module.exports = {
    prueba,
    create
}