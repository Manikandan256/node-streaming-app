const express = require('express');
const router = express.Router();
const Controller = require('./plan');
const middleware = require('../../helpers/middleware');

router.get('/', middleware.isAdmin, Controller.get)
router.post('/', middleware.isAdmin, Controller.create)
router.put('/:id', middleware.isAdmin, Controller.update);
router.delete('/:id', middleware.isAdmin, Controller.destroy);

module.exports = router;