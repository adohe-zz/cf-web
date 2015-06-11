var express = require('express'),
    passport = require('passport'),
    config = require('config');

var app = express();
var port = process.env.PORT || 8082;

// Bootstrap passport config
require('./config/passort')(passport, config);

// Bootstrap application settings
require('./config/express')(app, config);

// Bootstrap routes
require('./config/routes')(app);

app.listen(port);
console.log('server bound at http://localhost:' + port);

// Expose
module.exports = app;
