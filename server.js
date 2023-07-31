'use strict';

const express = require('express');
const config = require('./config/environment');

// Configuring the database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.uri, config.mongo.options);

// Connected handler
mongoose.connection.on('connected', function (err) {
    console.info('Connected to DB URI is : ' + config.mongo.uri);
});
// Error handler
mongoose.connection.on('error', function (err) {
    console.error('Cannot connect to DB URI = ' + config.mongo.uri + '. Reason : ' + JSON.stringify(err));
});

//Create express app
const app = express();
//Create HTTP server.
const server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

// Start the server
server.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});    

module.exports = server;