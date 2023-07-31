const express = require('express');
const router = express.Router();
const Controller = require('./video');
const middleware = require('../../helpers/middleware');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for temporary storage

router.get('/', middleware.isAuthenticated, Controller.get)
router.get('/:id', middleware.isAuthenticated, Controller.getVideos)
router.post('/upload', middleware.isAdmin, upload.single('video'), Controller.upload)

module.exports = router;