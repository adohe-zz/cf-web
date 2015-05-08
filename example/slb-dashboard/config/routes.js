var http = require('http'),
    async = require('async'),
    uris = require('./uris');
    util = require('../util/util');

var env = process.env.NODE_ENV || 'fws';
/**
 * Expose
 */
module.exports = function(app) {

    // home page
    app.get('/dashboard', function(req, res) {
        res.render('index');
    });

    // service page
    app.get('/dashboard/service', function(req, res) {
        res.render('index');
    });

    // instances page
    app.get('/dashboard/instances', function(req, res) {
        res.render('index');
    });

    app.all('/v1/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    });

    // ServicesList API
    app.get('/v1/services', function(req, res) {
        http.get(uris.repository[env], function(resp) {
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
        var name = req.params.name,
            namespace = req.params.namespace,
            body = {
                "serviceName": name,
                "serviceNamespace": namespace.replace(/_/g, '/'),
            };

        if(util.isEmpty(name) || util.isEmpty(namespace)) {
            res.writeHead(500);
            res.end();
        } else {
            if(env === 'fws') {
                body["subEnv"] = "fws";
            }
            var b = JSON.stringify(body);
            var options = {
                hostname: uris.registry[env],
                port: 80,
                path: '/registry-service/getserviceinstances',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/bjjson',
                    'Content-Length': Buffer.byteLength(b)
                }
            };
            var req = http.request(options, function(resp) {
                var data = [];

                resp.on('data', function(chunk) {
                    data.push(chunk);
                });
                resp.on('end', function() {
                    var instances = JSON.parse(data.join('')).instances;
                    if(instances === undefined) {
                        instances = [];
                    }
                    var result = {
                        "instances": instances
                    };
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    res.write(JSON.stringify(result));
                    res.end();
                });
            });
            req.on('error', function(e) {
                res.writeHead(500);
                res.end();
            });
            req.write(b);
            req.end();
        }
    });

    // Instances List API
    app.get('/v1/instances', function(req, res) {
        http.get(uris.etcd[env], function(resp) {
            var data = [];

            resp.on('data', function(chunk) {
                data.push(chunk);
            });
            resp.on('end', function() {
                var nodes = JSON.parse(data.join('')).node.nodes;
                if(nodes === undefined) {
                    nodes = [];
                }
                var servers = [];
                for(var i in nodes) {
                    var node = nodes[i];
                    servers.push({
                        "ip": node.key.substring(node.key.lastIndexOf('/') + 1)
                    });
                }
                var respBody = {
                    "instances": servers
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(respBody));
                res.end();
            });
        }).on('error', function(e) {
            res.writeHead(500);
            res.end();
        });
    });

    // Check in on instance API
    app.put('/v1/instance/', function(req, res) {
        var ip = req.body.ip;

        var rawBody = {
            "serverIp": ip,
            "status": "Up" },
            body = JSON.stringify(rawBody);

        var options = {
            hostname: uris.registry[env],
            port: 80,
            method: 'POST',
            path: '/registry-service/updateserverstatus',
            headers: {
                'Content-Type': 'application/bjjson',
                'Content-Length': Buffer.byteLength(body)
            }
        };
        var req = http.request(options, function(resp) {
            var data = [];

            resp.on('data', function(chunk) {
                data.push(chunk);
            });
            resp.on('end', function() {
                var responseStatus = JSON.parse(data.join('')).responseStatus;
                var result = {
                    'ack': responseStatus.ack
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(result));
                res.end();
            });
        });
        req.on('error', function(e) {
            res.writeHead(500);
            res.end();
        });
        req.write(body);
        req.end();
    });

    // Drop out one instance API
    app.delete('/v1/instance/:ip', function(req, res) {
        var ip = req.params.ip.replace(/_/g, '.');

        var rawBody = {
            "serverIp": ip,
            "status": "Down" },
            body = JSON.stringify(rawBody);

        var options = {
            hostname: uris.registry[env],
            port: 80,
            method: 'POST',
            path: '/registry-service/updateserverstatus',
            headers: {
                'Content-Type': 'application/bjjson',
                'Content-Length': Buffer.byteLength(body)
            }
        };
        var req = http.request(options, function(resp) {
            var data = [];

            resp.on('data', function(chunk) {
                data.push(chunk);
            });
            resp.on('end', function() {
                var responseStatus = JSON.parse(data.join('')).responseStatus;
                var result = {
                    'ack': responseStatus.ack
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(result));
                res.end();
            });
        });
        req.on('error', function(e) {
            res.writeHead(500);
            res.end();
        });
        req.write(body);
        req.end();

    });

    // Check Health API
    app.post('/v1/instance/', function(req, res) {
        var url = req.body.url,
            newUrl = url + 'checkhealth.bjjson';

        http.get(newUrl, function(resp) {
            var data = [];

            resp.on('data', function(chunk) {
                data.push(chunk);
            });
            resp.on('end', function() {
                var responseStatus = JSON.parse(data.join('')).responseStatus;
                var result = {
                    'status': responseStatus
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
}
