const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    cedulac: {
        type: Number,
        required: true
    },
    nombrec: {
        type: String,
        required: true
    },
    apellidosc: {
        type: String,
        required: true
    },
    municipio: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String
    },
    c_llegar: {
        type: String
    },
    telefonoc: {
        type: Number,
        required: true
    },
    emailc: {
        type: String,
        required: true
    },
    precioc: {
        type: Number,
        required: true
    },
    fecha_i: {
        type: String,
        required: true
    },
    tip_servicio: {
        type: String,
        required: true
    },
    c_ubicacion: {
        type: String
    },
    nodo: {
        type: String
    },
    sectorial: {
        type: String
    },
    pppoe: {
        type: String,
        required: true
    },
    ip_antena: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    

});

module.exports = mongoose.model('Cliente', ClienteSchema);