const { response } = require('express');

const Bitacora = require('../models/bitacoraGral');



const getBitacora = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [vuelos, total] = await Promise.all([
        Bitacora
            .find({}, 'clave matricula opTramo opOD origenDestino nacInt horarioAterrizaje horarioManifestoLLegada horarioManifestoSalida bitacora numVuelo clasificacion operadorVuelo dia manifestoLLegada manifestoSalida tiempoPlataformaHr minPlataformaMex hrSalidaZulu hrSalidaReal capitanVuelo oficialPrimero oficialSegundo oficialTercero oficialCuarto oficialQuinto pierna fecha origen destino horaSalida horaDespegue horaAterrizaje estacionamiento hrBloque hrVuelo ciclosVuelo hrMexico combustibleSuministroTN combustibleSuministroLibs combustibleSuministroGal combustibleSuministroLts combustibleSuministroKgs combustibleSalidaTN combustibleSalidaLibs combustibleSalidaKg combustibleLLegadaTN combustibleLLegadaLibs combustibleLLegadaKg cargaTN cargaLibs cargaKg apuHr apuCiclos suministroGal suministroLibs suministroLts cargoMvtKg convSuministroTn convSuministroGal convSuministroLts convSuministroLibs consumoLibs tampaDepartues tampaTramos operaciones')
            .skip(desde)
            .limit(10000000),

        Bitacora.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        vuelos,
        total
    });

}

const crearBitacora = async (req, res = response) => {

    try {

        const dtOperador = new Bitacora(req.body);

        await dtOperador.save();

        res.status(200).json({
            ok: true,
            msg: 'post Bitacoras',
            dtOperador
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear, Bitacoras'
        });
    }
}

module.exports = {
    getBitacora,
    crearBitacora
}
