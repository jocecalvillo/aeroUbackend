const { Schema, model } = require('mongoose');

const XaEfrSchema = Schema({

    logBook: {
        type: String,
        requiered: true
    },
    logBookVlo: {
        type: String,
        requiered: true
    },
    operacion: {
        type: String,
        requiered: true
    },
    leg: {
        type: Number,
        requiered: true
    },
    fecha: {
        type: String,
        requiered: true
    },
    flt: {
        type: String,
        requiered: true
    },
    from: {
        type: String,
        requiered: true
    },
    to: {
        type: String,
        requiered: true
    },

    blkOut: {
        type: String,
        requiered: true
    },

    off: {
        type: String,
        requiered: true
    },

    onn: {
        type: String,
        requiered: true
    },
    blkIn: {
        type: String,
        requiered: true
    },

    blockHours: {
        type: String,
        requiered: true
    },

    flightHours: {
        type: String,
        requiered: true
    },

    flightCycles: {
        type: Number,
        requiered: true
    },

    blkOutMex: {
        type: String,
        requiered: true
    },
    uplift: {
        type: Number,
        requiered: true
    },
    depart: {
        type: Number,
        requiered: true
    },
    arrive: {
        type: Number,
        requiered: true
    },

    cargo: {
        type: Number,
        requiered: true
    },

    cargoT: {
        type: Number,
        requiered: true
    },

    cargoMvtT: {
        type: Number,
        requiered: true
    },

    fuelVoucherLt: {
        type: Number,
        requiered: true
    },
    fuelVoucherBitacoraTnX1000Lt: {
        type: Number,
        requiered: true
    },

    fuelVoucherGal: {
        type: Number,
        requiered: true
    },
    fuelVoucherBitacoraTnX1000Gal: {
        type: Number,
        requiered: true
    },
    fuelVoucherTnTotal: {
        type: Number,
        requiered: true
    },
    fuelVoucherGalTotal: {
        type: Number,
        requiered: true
    },
    fuelVoucherLtTotal: {
        type: Number,
        requiered: true
    },

    errorBitacoraVsVoucher: {
        type: Number,
        requiered: true
    },

    consumoLbX1000: {
        type: Number,
        requiered: true
    },

    observaciones: {
        type: String,
        requiered: true
    },
    fechaLocal: {
        type: String,
        requiered: true
    },
    start: {
        type: String,
        requiered: true
    },
    finish: {
        type: String,
        requiered: true
    },
    concepto: {
        type: String,
        requiered: true
    },
    fechaCarga: {
        type: String,
        requiered: true
    }

}, { collection: 'xa_efr' });

XaEfrSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('XaEfrSchema', XaEfrSchema);