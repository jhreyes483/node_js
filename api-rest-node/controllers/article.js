const prueba = (req, res) => {
    return res.status(200).json({
        msg: "Soy una accion de prueba en el controlador de articulos" 
    });
}


const controller = {

}


module.exports = {
    prueba
}