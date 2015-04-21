var path = require('path'),
    extend = require('util')._extend;

var test = require('./env/test'),
    development = require('./env/development'),
    production = require('./env/production');

var defaults = {
    root: path.normalize(__dirname + '/..')
};

module.exports = {
    development: extend(development, defaults),
    test: extend(test, defaults),
    production: extend(production, defaults)
}[process.env.NODE_ENV || 'development'];
