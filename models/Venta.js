const mongoose = require('mongoose');
const VentaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
    },
    importe: {
        type: Number,
        required: true
    }
});

const Venta = mongoose.model('Venta', VentaSchema);
module.exports = Venta;