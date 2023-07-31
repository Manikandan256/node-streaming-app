'use strict';

const _ = require('lodash');
const Model = require('./plan.model');

function handleError(res, err) {
    return res.status(500).send({ error: err._message || err });
}

exports.get = async (req, res) => {

    try {
        const plans = await Model.find();
        res.status(200).json(plans);
    } catch (err) {
        handleError(res, err);
    }

}

exports.create = async (req, res) => {

    try {
        req.body['created_by'] = req.user._id;
        const plan = await Model.create(req.body);
        res.status(201).json({ 'data': plan, 'message': 'Plan created!.' });
    } catch (err) {
        handleError(res, err);
    }

}

exports.update = async (req, res) => {

    try {
        if (req.body._id) { delete req.body._id; }

        const plan = await Model.findById(req.params.id);
        if (!plan) { res.status(404).json({ error: 'Plan not found' }); }
        const updated = _.merge(plan, req.body);
        const plans = await updated.save();
        res.status(200).json({ 'data': plans, 'message': 'Plan updated!.' })

    } catch (err) {
        handleError(res, err);
    }

};

exports.destroy = async (req, res) => {

    try {
        const result = await Model.deleteOne({ _id: req.params.id });
        console.info(result)
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Plan deleted!.' })
        } else {
            res.status(404).json({ error: 'Plan not found' });
        }

    } catch (err) {
        handleError(res, err);
    }

};