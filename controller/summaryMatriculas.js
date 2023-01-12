const { response } = require('express');

const Efr = require('../models/summaryXaEfr')
const Ggl = require('../models/summaryXaGgl')
const Lfr = require('../models/summaryXaLfr')
const Lrc = require('../models/summaryXaLrc')
const Uyr = require('../models/summaryXaUyr')

const getEfr = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [matriculas, total] = await Promise.all([
        Efr
            .find({}, 'match vuelo origenDestino origen destino clase cliente')
            .skip(desde)
            .limit(10),

        Efr.countDocuments()
    ]);

    res.status(200).json({
        ok: true,
        matriculas,
        total
    });

}
const getLfr = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [matriculas, total] = await Promise.all([
        Lfr
            .find({}, 'match vuelo origenDestino origen destino clase cliente')
            .skip(desde)
            .limit(10),

        Lfr.countDocuments()
    ]);

    res.status(200).json({
        ok: true,
        matriculas,
        total
    });

}

const getLrc = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [matriculas, total] = await Promise.all([
        Lrc
            .find({}, 'match vuelo origenDestino origen destino clase cliente')
            .skip(desde)
            .limit(10),

        Lrc.countDocuments()
    ]);

    res.status(200).json({
        ok: true,
        matriculas,
        total
    });

}
const getUyr = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [matriculas, total] = await Promise.all([
        Uyr
            .find({}, 'match vuelo origenDestino origen destino clase cliente')
            .skip(desde)
            .limit(10),

        Uyr.countDocuments()
    ]);

    res.status(200).json({
        ok: true,
        matriculas,
        total
    });

}
const getGgl = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [matriculas, total] = await Promise.all([
        Ggl
            .find({}, 'match vuelo origenDestino origen destino clase cliente')
            .skip(desde)
            .limit(10),

        Ggl.countDocuments()
    ]);

    res.status(200).json({
        ok: true,
        matriculas,
        total
    });

}

module.exports = {
    getEfr,
    getGgl,
    getLfr,
    getUyr,
    getLrc

}


