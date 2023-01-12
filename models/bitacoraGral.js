const { Schema, model } = require('mongoose');

const BitacoraSchema = Schema({

    clave: {
        type: String,
        require: true
    },
    matricula: {
        type: String,
        require: true
    },
    opTramo: {
        type: Number,
        require: true,
    },
    opOD: {
        type: String,
        require: true
    },
    origenDestino: {
        type: String,
        require: true
    },
    nacInt: {
        type: String,
        require: true
    },
    horarioAterrizaje: {
        type: String,
        require: true
    },

    horarioManifestoLLegada: {
        type: String,
        require: true
    },

    horarioManifestoSalida: {
        type: String,
        require: true
    },

    bitacora: {
        type: Number,
        require: true,
    },
    numVuelo: {
        type: Number,
        require: true,
    },
    clasificacion: {
        type: String,
        require: true
    },
    operadorVuelo: {
        type: String,
        require: true
    },
    dia: {
        type: String,
        require: true,
    },
    manifestoLLegada: {
        type: String,
        require: true,
    },
    manifestoSalida: {
        type: String,
        require: true,
    },
    tiempoPlataformaHr: {
        type: String,
        require: true,
    },
    minPlataformaMex: {
        type: String,
        require: true,
    },
    hrSalidaZulu: {
        type: String,
        require: true,
    },
    hrSalidaReal: {
        type: String,
        require: true,
    },
    capitanVuelo: {
        type: String,
        require: true
    },
    oficialPrimero: {
        type: String,
        require: true
    },
    oficialSegundo: {
        type: String,
        require: true
    },
    oficialTercero: {
        type: String,
        require: true
    },
    oficialCuarto: {
        type: String,
        require: true
    },
    oficialQuinto: {
        type: String,
        require: true
    },

    pierna: {
        type: Number,
        require: true,
    },
    fecha: {
        type: String,
        require: true,
    },

    origen: {
        type: String,
        require: true
    },
    destino: {
        type: String,
        require: true
    },

    horaSalida: {
        type: String,
        require: true,
    },

    horaDespegue: {
        type: String,
        require: true,
    },

    horaAterrizaje: {
        type: String,
        require: true,
    },

    estacionamiento: {
        type: String,
        require: true,
    },

    hrBloque: {
        type: String,
        require: true,
    },

    hrVuelo: {
        type: String,
        require: true,
    },

    ciclosVuelo: {
        type: Number,
        require: true,
    },

    hrMexico: {
        type: String,
        require: true,
    },

    combustibleSuministroTN: {
        type: Number,
        require: true,
    },

    combustibleSuministroLibs: {
        type: Number,
        require: true,
    },
    combustibleSuministroGal: {
        type: Number,
        require: true,
    },

    combustibleSuministroLts: {
        type: Number,
        require: true,
    },

    combustibleSuministroKgs: {
        type: Number,
        require: true,
    },

    combustibleSalidaTN: {
        type: Number,
        require: true,
    },
    combustibleSalidaLibs: {
        type: Number,
        require: true,
    },

    combustibleSalidaKg: {
        type: Number,
        require: true,
    },

    combustibleLLegadaTN: {
        type: Number,
        require: true,
    },

    combustibleLLegadaLibs: {
        type: Number,
        require: true,
    },

    combustibleLLegadaKg: {
        type: Number,
        require: true,
    },

    cargaTN: {
        type: Number,
        require: true,
    },

    cargaLibs: {
        type: Number,
        require: true,
    },
    cargaKg: {
        type: Number,
        require: true,
    },

    apuHr: {
        type: Number,
        require: true,
    },

    apuCiclos: {
        type: Number,
        require: true,
    },

    suministroGal: {
        type: Number,
        require: true,
    },

    suministroLibs: {
        type: Number,
        require: true,
    },
    suministroLts: {
        type: Number,
        require: true,
    },
    cargoMvtKg: {
        type: Number,
        require: true,
    },
    convSuministroTn: {
        type: Number,
        require: true,
    },
    convSuministroGal: {
        type: Number,
        require: true,
    },
    convSuministroLts: {
        type: Number,
        require: true,
    },

    convSuministroLibs: {
        type: Number,
        require: true,
    },
    consumoLibs: {
        type: Number,
        require: true,
    },
    tampaDepartues: {
        type: String,
        require: true,
    },
    tampaTramos: {
        type: String,
        require: true,
    },
    operaciones: {
        type: String,
        require: true,
    },

}, { collection: 'bitacora' });

BitacoraSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('Bitacora', BitacoraSchema);