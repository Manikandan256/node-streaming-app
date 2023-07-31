'use strict';

const path = require('path');
const _ = require('lodash');

const all = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    mongo: {
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true           
        }
    },
    secrets: {
        session: process.env.SESSION_SECRET || 'kqP2$?9rHM'
    }
};

module.exports = _.merge(all, require('./' + all.env + '.js'));