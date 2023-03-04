/** Se llama el orm */
const mongoose = require("mongoose")

/** Se crea el esquema de la bases de datos*/
const Schema = mongoose.Schema
/** Se crea el modelo de la bases de datos */
const UserSchema = Schema({
        username: {
                type: String,
                lowercase: true,
                maxLength: 25,
                minLength: 2
        },

        lastname: {
                type: String,
                require: true,
                lowercase: true,
                maxLength: 25,
                minLength: 2
        },
        email: {
                type: String
        },
        age: { type: Number, min: 18 },
        state: Boolean,
        user: String,
        password: String

},{
        timestamps:true
});

/** Crear la tabla */
const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel