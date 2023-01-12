const { Schema, model } = require('mongoose');

const PrecioAterrizajeMexHistSchema = Schema({
    aterrizaje: {
        type: String,
        require: true
    },
    match: {
        type: String,
        require: true
    },
    nacInt: {
        type: String,
        require: true
    },
    horario: {
        type: String,
        require: true
    },
    precio: {
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

PrecioAterrizajeMexHistSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('PrecioAterrizajeMexHist', PrecioAterrizajeMexHistSchema);