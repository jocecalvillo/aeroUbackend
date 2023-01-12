const { Schema, model } = require('mongoose');

const CalculoSeneamSchema = Schema({

    distancia: {
        type: String,
        require: true
    },
    claveSenea: {
        type: String,
        require: true
    },
    kilometros: {
        type: Number,
        require: true
    },
    tarifa: {
        type: String,
        require: true
    },
    importe: {
        type: Number,
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

CalculoSeneamSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('CalculoSeneam', CalculoSeneamSchema);