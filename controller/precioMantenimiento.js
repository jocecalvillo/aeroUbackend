const { response } = require('express');
const bcrypt = require('bcryptjs');

const PrecioMantenimiento = require('../models/precioMantenimiento');
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
        PrecioMantenimiento
            .find({}, 'est importeUsd aeropuerto usuario')
            .skip(desde)
            .limit(10000000),

        PrecioMantenimiento.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        precios,
        total
    });

}

const crearPrecio = async (req, res) => {


    try {

        const precio = new PrecioMantenimiento(req.body);
        await precio.save();
        res.status(201).json({
            ok: true,
            precio
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear Precio Mantimiento'
        });
    }

}



const actualizarPrecio = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioMantenimiento.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        //Actualizacion
        const { est, importeUSD, aeropuerto, ...campos } = req.body; //destructuracion para eliminar campo de password y google


        const precioActualizado = await PrecioMantenimiento.findByIdAndUpdate(uid, campos, { new: true });//new para regresar el actualizado
        res.status(200).json({
            ok: true,
            precioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar Precio Hotel'
        });

    }
}

const borrarPrecios = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioMantenimiento.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        await PrecioMantenimiento.findByIdAndDelete(uid);


        res.status(200).json({
            ok: true,
            msg: 'Precio eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar precio mentinimiento'
        });

    }

}

module.exports = {
    getPrecio,
    crearPrecio,
    actualizarPrecio,
    borrarPrecios



}