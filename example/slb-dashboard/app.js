var express = require('express'),
    config = require('config');

var app = express();
var port = process.env.PORT || 8082;

// Bootstrap application settings
require('./config/express')(app, config);

// Bootstrap routes
require('./config/routes')(app);

app.listen(port);
console.log('server bound at http://localhost:' + port);

// Expose
module.exports = app;
