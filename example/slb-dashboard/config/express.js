var express = require('express'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    multer = require('multer'),
    swig = require('swig');

var env = process.env.NODE_ENV || 'development';

module.exports = function(app, config) {

    // Compression middleware (should be placed before express.static)
    app.use(compression({
        threshold: 512
    }));

    // Static file middleware
    app.use(express.static(config.root + '/public'));

    // Swig templating engine setting
    if(env === 'development' || env === 'test') {
        swig.setDefaults({
            cache: false
        });
    }

    // Set views path, template engine and default layout
    app.engine('html', swig.renderFile);
    app.set('views', config.root);
    app.set('view engine', 'html');

    // bodyParser should be placed above methodOverride
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(multer());
    app.use(methodOverride(function(req, res) {
        if(req.body && typeof req.body === 'object' && '_method' in req.body) {
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));
}
