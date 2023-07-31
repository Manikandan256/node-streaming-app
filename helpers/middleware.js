'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config/environment');

// Middleware to verify JWT token
exports.isAuthenticated = (req, res, next) => {

    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, config.secrets.session, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });

}

// Middleware to verify is `Admin`
exports.isAdmin = (req, res, next) => {
    console.info('&&&&&& isAdmin &&&&&&')    
    const token = req.header('Authorization')?.split(' ')[1];
    console.info(token)
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, config.secrets.session, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        console.info(user)
        if (user.role !== 'Admin')
            return res.status(401).json({ error: 'Access denied' });

        req.user = user;
        next();
    });

}