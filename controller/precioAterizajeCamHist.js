const { response } = require('express');
const bcrypt = require('bcryptjs');

const PrecioAterrizajeCam = require('../models/precioAterizajeCamHist');
const { generarJWT } = require('../helpers/jwt');

const getPrecios = async (req, res) => {

    const precios = await PrecioAterrizajeMex.find({}, 'aterrizaje match nacInt horario precio usuario');

    res.status(200).json({
        ok: true,
        precios
    });
}

const getPrecio = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [precios, total] = await Promise.all([
        PrecioAterrizajeCam
            .find({}, 'est importeUsd usuario')
            .skip(desde)
            .limit(10000000),

        PrecioAterrizajeCam.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        precios,
        total
    });

}

const crearPrecio = async (req, res) => {


    try {

        const precio = new PrecioAterrizajeCam(req.body);
        await precio.save();
        res.status(201).json({
            ok: true,
            precio
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear Precio Aterrizaje CAM'
        });
    }

}



const actualizarPrecio = async (req, res = response) => {

    const uid = req.params.id;

    try {
        //const precioDB = await PrecioAterrizajeCam.findById(uid);
        const precioDB = await PrecioAterrizajeCam.find({ idHistorico: uid });

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        //Actualizacion
        const { est, importeUSD, ...campos } = req.body; //destructuracion para eliminar campo de password y google


        const precioActualizado = await PrecioAterrizajeCam.findOneAndUpdateAndUpdate({ idHistorico: uid }, campos, { new: true });//new para regresar el actualizado
        res.status(200).json({
            ok: true,
            precioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar Precio Aterrizaje CAM'
        });

    }
}

const borrarPrecios = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioAterrizajeCam.find({ idHistorico: uid });

        console.log(precioDB);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        await PrecioAterrizajeCam.findOneAndDelete({ idHistorico: uid });


        res.status(200).json({
            ok: true,
            msg: 'Precio eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar precio aterrizaje'
        });

    }

}

module.exports = {
    getPrecio,
    crearPrecio,
    actualizarPrecio,
    borrarPrecios,
    getPrecios



}