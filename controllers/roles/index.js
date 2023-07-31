const express = require('express');
const router = express.Router();
const Controller = require('./role');

router.get('/', Controller.get)
router.post('/', Controller.create)

module.exports = router;