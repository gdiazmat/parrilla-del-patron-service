const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;