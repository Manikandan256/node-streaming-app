'use strict';

const _ = require('lodash');
const Model = require('./role.model');

function handleError(res, err) {
    return res.status(500).send({ error: err._message || err });
}

exports.get = async (req, res) => {

    try {
        const roles = await Model.find();
        res.status(200).json(roles);
    } catch (err) {
        handleError(res, err);
    }

}

exports.create = async (req, res) => {

    try {
        const role = await Model.create(req.body);
        res.status(201).json({ 'data': role, 'message': 'Role created!.' });
    } catch (err) {
        handleError(res, err);
    }

}