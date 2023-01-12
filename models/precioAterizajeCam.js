const { Schema, model } = require('mongoose');

const AterrizajeCamSchema = Schema({

    est: {
        type: 'String',
        require: true

    },
    importeUsd: {
        type: Number,
        require: true
    },
    usuario: {
        type: String,
        require: false

    },
    fechaCarga: {
        type: String,
        requiered: true
    },
    idHistorico: {
        type: String,
        require: true
    }
}, { collection: 'AterrizajeCam' });



AterrizajeCamSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('AterrizajeCam', AterrizajeCamSchema);