const mongoose = require('mongoose'); 
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema; 

const usuariosSchema = new Schema({
    nombre: {
        type:String,  required: [true,'El nombre es necesario']
    },
    edad:{
        type: Number, default: 1
    },
    password:{
        type: String, required:[true, 'Contraseña es necesario']
    },
    correo:{
        type:String,
        unique: true
    },
    role: {
        type: String, default: "user"
    },
    imagen: {
        type: String
    }

});

//exportacion del esquema
module.exports = mongoose.model('usuarios', usuariosSchema)