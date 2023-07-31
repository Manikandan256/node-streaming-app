'use strict';

const _ = require('lodash');
const Model = require('./subscription.model');

function handleError(res, err) {
    return res.status(500).send({ error: err._message || err });
}

exports.get = async (req, res) => {

    try {
        const subscriptions = await Model.find();
        res.status(200).json(subscriptions);
    } catch (err) {
        handleError(res, err);
    }

}

exports.create = async (req, res) => {

    try {
        req.body['user_id'] = req.user._id;
        const subscription = await Model.create(req.body);
        res.status(201).json({ 'data': subscription, 'message': 'success' });
    } catch (err) {
        handleError(res, err);
    }

}