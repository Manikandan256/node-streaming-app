const express = require('express');
const router = express.Router();
const Controller = require('./user');
const middleware = require('../../helpers/middleware');

router.get('/', middleware.isAdmin, Controller.get)
router.post('/createAdmin', Controller.createAdmin)
router.post('/createCustomer', Controller.createCustomer)
router.post('/login', Controller.login)

module.exports = router;