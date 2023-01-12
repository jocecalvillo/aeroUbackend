const { Schema, model } = require('mongoose');

const CalculoSeneamHistSchema = Schema({

    distancia: {
        type: String,
        require: true
    },
    claveSenea: {
        type: String,
        require: true
    },
    kilometros: {
        type: String,
        require: true
    },
    tarifa: {
        type: String,
        require: true
    },
    importePesos: {
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

CalculoSeneamHistSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('CalculoSeneamHist', CalculoSeneamHistSchema);