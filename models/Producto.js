const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    clasificacion: {
        type: String,
        required: true
    },
    existencia: {
        type: Number,
        required: true
    }
});

const Producto = mongoose.model('Producto', ProductoSchema);
module.exports = Producto;