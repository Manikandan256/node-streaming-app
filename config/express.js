'use strict';

const express = require('express');
const config = require('./environment');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function (app) {

    const env = config.env;

    app.set('view engine', 'html');
    // get all data/stuff of the body (POST) parameters
    app.use(bodyParser.json({ limit: '100mb' })); // parse application/json 
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(bodyParser.urlencoded({ limit: '100mb', extended: true })); // parse application/x-www-form-urlencoded

    app.use(cors());

}