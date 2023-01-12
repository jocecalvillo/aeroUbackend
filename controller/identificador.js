const { response } = require('express');

const { idRand } = require('../helpers/identificador')



const crearId = async (req, res = response) => {

    try {

        const longitud = Number(req.query.longitud) || 8;

        const idRandom = idRand(longitud);


        res.status(200).json({
            ok: true,
            msg: 'Se Genero Identificador Exitosamente',
            idRandom
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al generar identificador'
        });
    }


}

module.exports = {
    crearId

}