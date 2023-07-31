'use strict';

module.exports = function (app) {

    //API's
    app.use('/api/users', require('./controllers/users'));
    app.use('/api/roles', require('./controllers/roles'));
    app.use('/api/plans', require('./controllers/plans'));
    app.use('/api/subscription', require('./controllers/subscription'));
    app.use('/api/video', require('./controllers/video'));    
    
}