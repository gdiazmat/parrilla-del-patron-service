const mongoose = require('mongoose');
const SettingsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    mesas: {
        type: Number,
        required: true
    }
});

const Settings = mongoose.model('Settings', SettingsSchema);
module.exports = Settings;