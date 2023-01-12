const { response } = require('express');
const bcrypt = require('bcryptjs');

const PrecioPersonalRampa = require('../models/precioPersonalRampaHist');
const { generarJWT } = require('../helpers/jwt');

/*const getPrecio = async (req, res) => {

    const precios = await PrecioAterrizajeMex.find({}, 'aterrizaje match nacInt horario precio');

    res.status(200).json({
        ok: true,
        precios
    });
}*/

const getPrecio = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [precios, total] = await Promise.all([
        PrecioPersonalRampa
            .find({}, 'est importeUsd usuario')
            .skip(desde)
            .limit(10000000),

        PrecioPersonalRampa.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        precios,
        total
    });

}

const crearPrecio = async (req, res) => {


    try {

        const precio = new PrecioPersonalRampa(req.body);
        await precio.save();
        res.status(201).json({
            ok: true,
            precio
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear Precio Personal Rampa'
        });
    }

}



const actualizarPrecio = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioPersonalRampa.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        //Actualizacion
        const { est, importeUSD, ...campos } = req.body; //destructuracion para eliminar campo de password y google


        const precioActualizado = await PrecioPersonalRampa.findByIdAndUpdate(uid, campos, { new: true });//new para regresar el actualizado
        res.status(200).json({
            ok: true,
            precioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar Precio Personal Rampa'
        });

    }
}

const borrarPrecios = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioPersonalRampa.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        await PrecioPersonalRampa.findByIdAndDelete(uid);


        res.status(200).json({
            ok: true,
            msg: 'Precio eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar precio personal rampa'
        });

    }

}

module.exports = {
    getPrecio,
    crearPrecio,
    actualizarPrecio,
    borrarPrecios



}