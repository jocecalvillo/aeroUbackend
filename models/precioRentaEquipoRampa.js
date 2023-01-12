const { Schema, model } = require('mongoose');

const RentaEquipoRampaSchema = Schema({

    est: {
        type: String,
        require: true

    },
    importeUSD: {
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

RentaEquipoRampaSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('RentaEquipoRampa', RentaEquipoRampaSchema);