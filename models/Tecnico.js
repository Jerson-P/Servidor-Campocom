const mongoose = require('mongoose');

const TecnicoSchema = mongoose.Schema({
    identificaciont: {
        type: Number,
        required: true
    },
    nombret: {
        type: String,
        required: true
    },
    apellidot: {
        type: String,
        required: true
    },
    cargot: {
        type: String,
        required: true
    },
    emailt: {
        type: String,
        required: true
    },
    passwordt: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Tecnico', TecnicoSchema);