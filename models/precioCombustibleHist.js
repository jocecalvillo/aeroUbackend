const { Schema, model } = require('mongoose');

const PrecioCombustibleHistSchema = Schema({

    match: {
        type: String,
        require: true
    },
    combustible: {
        type: String,
        require: true
    },
    dia: {
        type: Number,
        require: true
    },
    vigenciaInicio: {
        type: Date,
        require: true
    },
    vigenciaFin: {
        type: Date,
        require: true
    },
    aeropuerto: {
        type: String,
        require: true
    },
    nombreAeropuerto: {
        type: String,
        require: true
    },
    precioConDescuento: {
        type: Number,
        require: true
    },
    precioSinDescuento: {
        type: Number,
        require: true
    },
    precioGalMex: {
        type: Number,
        require: true
    },
    precioDolar: {
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

PrecioCombustibleHistSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('PrecioCombustibleHistSchema', PrecioCombustibleHistSchema);