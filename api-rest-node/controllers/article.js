const validator = require("validator")

const prueba = (req, res) => {
    return res.status(200).json({
        msg: "Soy una accion de prueba en el controlador de articulos" 
    });
}


const controller = {

}


const create = (req, res) => {
    // Recoger los parametros por post a guardar
    let parametros = req.body;
    // Validar los datos
    try{    
        let validar_titulo = !validator.isEmpty(parametros.tittle) && validator.isLength(parametros.tittle, {nmin:1, max:10});
        let validar_contenido = !validator.isEmpty(parametros.content);

        if(!validar_contenido || !validar_titulo){
            throw new Error("No se ha validado la informacion")
        }

    }catch(error){
        return res.status(400).json({
            status: "error",
            mensaje: "Fatan datos por enviar "+error
        })
    }

    // Crear el objeto

    // Guardar el articulo en la base de datos    

    // Devolver resultado
    return res.status(200).json({
        mensaje: "Accion de guardar",
        parametros
    })
}


module.exports = {
    prueba,
    create
}