const { Schema, model } = require('mongoose');

const SummaryXaLfrSchema = Schema({

    clave: {
        type: String,
        require: true

    },

    bitacora: {
        type: String,
        require: true

    },

    clasificacion: {
        type: String,
        require: true
    },
    operadorVuelo: {
        type: String,
        require: true
    },
    operadorTramo: {
        type: String,
        require: true

    },
    matricula: {
        type: String,
        requiered: true
    },
    dia: {
        type: Number,
        require: true
    },
    matricula: {
        type: String,
        requiered: true
    },
    numeroVuelo: {
        type: Number,
        requiered: true
    },
    origenDestino: {
        type: String,
        requiered: true
    },
    origen: {
        type: String,
        requiered: true
    },
    destino: {
        type: String,
        requiered: true
    },
    nacInt: {
        type: String,
        requiered: true
    },
    conSumLts: {
        type: Number,
        requiered: true
    },

    sumLts: {
        type: Number,
        requiered: true
    },
    conSumGls: {
        type: Number,
        requiered: true
    },
    comConsumido: {
        type: Number,
        requiered: true
    },
    minPlataformaExt: {
        type: Number,
        requiered: true
    },
    tampaTramos: {
        type: String,
        requiered: true
    },
    tipoCambioUsd: {
        type: String,
        requiered: true
    },
    matchRampa: {
        type: String,
        requiered: true
    },
    vueloOd: {
        type: String,
        requiered: true
    },
    precioAterrizaje: {
        type: String,
        requiered: true
    },
    match: {
        type: String,
        requiered: true
    },
    precioPlataforma: {
        type: Number,
        requiered: true
    },
    precioCombustibleAsa: {
        type: Number,
        requiered: true
    },
    aterrizaje: {
        type: Number,
        requiered: true
    },
    plataforma: {
        type: Number,
        requiered: true
    },
    seneam: {
        type: Number,
        requiered: true
    },
    sobreVuelosCubaEuros: {
        type: Number,
        requiered: true
    },
    combustible: {
        type: Number,
        requiered: true
    },
    matchOp: {
        type: String,
        requiered: true
    },
    matchCatering: {
        type: String,
        requiered: true
    },
    match2Summary: {
        type: String,
        requiered: true
    },
    aterrizajeCostOp: {
        type: Number,
        requiered: true
    },
    plataformaCostOp: {
        type: Number,
        requiered: true
    },
    seneamCostOp: {
        type: Number,
        requiered: true
    },
    servicioRampa: {
        type: Number,
        requiered: true
    },
    combustibleCostOp: {
        type: Number,
        requiered: true
    },
    sobreVueloCuba: {
        type: Number,
        requiered: true
    },
    sobreVueloPanama: {
        type: Number,
        requiered: true
    },
    coscesna: {
        type: Number,
        requiered: true
    },
    servicioRampaMia: {
        type: Number,
        requiered: true
    },
    plataformaMia: {
        type: Number,
        requiered: true
    },
    cateringMia: {
        type: Number,
        requiered: true
    },
    aterrizajeGuaCam: {
        type: Number,
        requiered: true
    },
    plataformaGuaCam: {
        type: Number,
        requiered: true
    },
    supervisionDespachoGuaCam: {
        type: Number,
        requiered: true
    },
    migracionGuaCam: {
        type: Number,
        requiered: true
    },
    serviciosRampaGuaCam: {
        type: Number,
        requiered: true
    },
    supervisionDespachoSjo: {
        type: Number,
        requiered: true
    },
    seguridad: {
        type: Number,
        requiered: true
    },
    aphisUsd: {
        type: Number,
        requiered: true
    },
    supervisionDespachoGuaTampa: {
        type: Number,
        requiered: true
    },
    supervisionDespachoSjoTampa: {
        type: Number,
        requiered: true
    },
    combustibleGls: {
        type: Number,
        requiered: true
    },
    combustibleConsumidoGls: {
        type: Number,
        requiered: true
    },
    cateringOrdUsd: {
        type: Number,
        requiered: true
    },
    seguridadOrd: {
        type: Number,
        requiered: true
    },
    mantoOrd: {
        type: Number,
        requiered: true
    },


});

SummaryXaLfrSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('SummaryXaLfr', SummaryXaLfrSchema);