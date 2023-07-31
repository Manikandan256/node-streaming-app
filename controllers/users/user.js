'use strict';

const _ = require('lodash');
const Model = require('./user.model');
const Role = require('../roles/role.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/environment');

function handleError(res, err) {
    return res.status(500).send({ error: err._message || err });
}

exports.get = async (req, res) => {

    try {
        const users = await Model.find();
        res.status(200).json(users);
    } catch (err) {
        handleError(res, err);
    }

}

exports.createAdmin = async (req, res) => {

    try {
        const role = await Role.findOne({ role_name: 'Admin' });
        if (!role) {
            res.status(404).json({ error: 'Role not found' });
        }

        req.body['password'] = await bcrypt.hash(req.body.password, 10);
        req.body['role_id'] = role._id;

        const user = await Model.create(req.body);
        res.status(201).json({ 'data': user, 'message': 'User created!.' });

    } catch (err) {
        handleError(res, err);
    }

}

exports.createCustomer = async (req, res) => {

    try {
        const role = await Role.findOne({ role_name: 'Customer' });
        if (!role) {
            res.status(404).json({ error: 'Role not found' });
        }

        req.body['password'] = await bcrypt.hash(req.body.password, 10);
        req.body['role_id'] = role._id;

        const user = await Model.create(req.body);
        res.status(201).json({ 'data': user, 'message': 'User created!.' });

    } catch (err) {
        handleError(res, err);
    }

}

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await Model.findOne({ email: email }).populate('role_id').exec();
        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
        } else {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({ _id: user._id, user: user.username, email: user.email, role: user.role_id.role_name }, config.secrets.session, { expiresIn: '1h' });
                res.json({ message: 'Login successful', token: token, data:user });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        }

    } catch (err) {
        handleError(res, err);
    }

}