const { Schema, model } = require('mongoose');

const OperacionClienteSchema = Schema({

    cleinte: {
        type: String,
        requiered: true
    },
    horasBloque: {
        type: String,
        requiered: true
    },
    horasVuelo: {
        type: String,
        requiered: true
    },
    ciclos: {
        type: Number,
        requiered: true
    },
    tramo: {
        type: Number,
        requiered: true
    }
}
);

OperacionClienteSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('OperacionClienteSchema', OperacionClienteSchema);