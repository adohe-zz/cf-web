var express = require('express');

var app = express();
var port = process.env.PORT || 8088;

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(port);
console.log('server bound at http://localhost:' + port);

// Expose
module.exports = app;
