var http = require('http'),
    async = require('async'),
    querystring = require('querystring'),
    _ = require('underscore'),
    util = require('../util/util');

/**
 * Expose
 */
module.exports = function(app) {

    // home page
    app.get('/dashboard', function(req, res) {
        res.render('index');
    });

    app.get('/dashboard/service', function(req, res) {
        res.render('index');
    });

    app.all('/v1/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    // ServicesList API
    app.get('/v1/services', function(req, res) {
        http.get('http://localhost', function(resp) {
            var data = [];

            resp.on('data', function(chunk) {
                data.push(chunk);
            });
            resp.on('end', function() {
                var serviceList = JSON.parse(data.join('')).serviceList;
                var result = {
                    'services': serviceList
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(result));
                res.end();
            });
        }).on('error', function(e) {
            res.writeHead(500);
            res.end();
        });
    });

    // ServiceInstances API
    app.get('/v1/service/:name/:namespace', function(req, res) {
        var name = req.param.name,
            namespace = req.param.namespace,
            body = {
                'serviceName': name,
                'serviceNamespace': namespace,
                "subEnv": 'fws'
            };

        if(util.isEmpty(name) || util.isEmpty(namespace)) {
            res.writeHead(500);
            res.end();
        } else {
            var options = {
                port: 80,
                path: '/registry-service/getserviceinstances',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            async.parallel({
                fws: function(cb) {
                    var fwsBody = querystring.stringify(body);
                    var fwsOptions = {
                        hostname: '',
                        port: 80,
                        path: '/registry-service/getserviceinstances',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': fwsBody.length
                        }
                    };
                    var req = http.request(fwsOptions, function(res) {
                        var data = '';
                        res.setEncoding('utf8');
                        res.on('data', function(chunk) {
                            data += chunk;
                        });
                        res.on('end', function() {
                        });
                    });
                    req.on('error', function(e) {
                        cb(e, null);
                    });
                    req.write(fwsBody);
                    req.end();
                },
                uat: function(cb) {
                },
                prod: function(cb) {
                }
            },
            function(err, results) {
            });
        }
    });
}
