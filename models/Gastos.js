const mongoose = require('mongoose');

const GastosSchema = mongoose.Schema({
    fechag: {
        type: String,
        required: true
    },
    indentificaciong: {
        type: Number,
        required: true
    },
    nombreg: {
        type: String,
        required: true
    },
    apellidosg: {
        type: String,
        required: true
    },
    mes_canceladog: {
        type: String,
        required: true
    },
    conceptog: {
        type: String,
        required: true
    },
    valorg: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Gastos', GastosSchema);