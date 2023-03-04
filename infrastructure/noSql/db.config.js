/**  Aqui estara alojada realmente el entorno de las bases de datos */

/** Se llama la constante orm */
const mongoose = require("mongoose");

require("../../domain/models/user.models")

exports.connect = () => {
        /**    Crearl la bases de datos con el nombre api_db  */
        mongoose.connect("mongodb://127.0.0.1:27017/api_bd")
        .then(()=> console.info("Se establecio una conexion"))
        .catch((error)=>console.error("Hay problemas de conexion",error))
}