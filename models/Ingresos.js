const mongoose = require('mongoose');

const IngresosSchema = mongoose.Schema({
    fechai: {
        type: String,
        required: true
    },
    nombrei: {
        type: String,
        required: true
    },
    apellidosi: {
        type: String,
        required: true
    },
    conceptoi: {
        type: String,
        required: true
    },
    n_recibo: {
        type: Number,
        required: true
    },
    valori: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Ingresos', IngresosSchema);