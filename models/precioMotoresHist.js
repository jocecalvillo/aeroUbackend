const { Schema, model } = require('mongoose');

const MotoresHistSchema = Schema({

    est: {
        type: String,
        require: true

    },
    importeUsd: {
        type: Number,
        require: true
    },
    aeropuerto: {
        type: String,
        require: true
    },
    usuario: {
        type: String,
        require: true
    },
    fechaCarga: {
        type: String,
        requiered: true
    },
    idHistorico: {
        type: String,
        require: true
    }
});

MotoresHistSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('MotoresHist', MotoresHistSchema);