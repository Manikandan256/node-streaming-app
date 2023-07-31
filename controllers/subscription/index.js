const express = require('express');
const router = express.Router();
const Controller = require('./subscription');
const middleware = require('../../helpers/middleware');

router.get('/', middleware.isAuthenticated, Controller.get)
router.post('/', middleware.isAuthenticated, Controller.create)

module.exports = router;