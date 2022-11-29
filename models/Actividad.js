const mongoose = require('mongoose');

const ActividadSchema = mongoose.Schema({
    fechaa: {
        type: String,
        required: true
    },
    descripciona: {
        type: String,
        required: true
    },
    clientea: {
        type: String,
        required: true
    },
    ubicaciona: {
        type: String,
        required: true
    },
    tecnicoa: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Actividad', ActividadSchema);