var http = require('http'),
    async = require('async'),
    request = require('request'),
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
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type");
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
            var options = {
                port: 80,
                path: '/registry-service/getserviceinstances',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/bjjson'
                }
            };
            async.parallel({
                fws: function(cb) {
                    var fwsBody = body;
                    fwsBody["subEnv"] = "fws";
                    var b = JSON.stringify(fwsBody);
                    var fwsOptions = {
                        hostname: 'localhost',
                        headers: {
                            'Content-Length': Buffer.byteLength(b)
                        }
                    };
                    var req = http.request(util.merge(fwsOptions, options), function(resp) {
                        var data = [];

                        resp.on('data', function(chunk) {
                            data.push(chunk);
                        });
                        resp.on('end', function() {
                            var instances = JSON.parse(data.join('')).instances;
                            if(instances === undefined) {
                                instances = [];
                            }
                            for(var i in instances) {
                              instances[i]["env"] = "fws";
                            }
                            cb(null, instances);
                        });
                    });
                    req.on('error', function(e) {
                        cb(e, null);
                    });
                    req.write(b);
                    req.end();
                },
                uat: function(cb) {
                    var b = JSON.stringify(body);
                    var uatOptions = {
                        hostname: 'localhost',
                        headers: {
                            'Content-Length': Buffer.byteLength(b)
                        }
                    };
                    var req = http.request(util.merge(uatOptions, options), function(resp) {
                        var data = [];

                        resp.on('data', function(chunk) {
                            data.push(chunk);
                        });
                        resp.on('end', function() {
                            var instances = JSON.parse(data.join('')).instances;
                            if(instances === undefined) {
                                instances = [];
                            }
                            for(var i in instances) {
                              instances[i]["env"] = "uat";
                            }
                            cb(null, instances);
                        });
                    });
                    req.on('error', function(e) {
                        cb(e, null);
                    });
                    req.write(b);
                    req.end();
                },
                prod: function(cb) {
                    var b = JSON.stringify(body);
                    var prodOptions = {
                        hostname: 'localhost',
                        headers: {
                            'Content-Length': Buffer.byteLength(b)
                        }
                    };
                    var req = http.request(util.merge(prodOptions, options), function(resp) {
                        var data = [];

                        resp.on('data', function(chunk) {
                            data.push(chunk);
                        });
                        resp.on('end', function() {
                            var instances = JSON.parse(data.join('')).instances;
                            if(instances === undefined) {
                                instances = [];
                            }
                            for(var i in instances) {
                              instances[i]["env"] = "prod";
                            }
                            cb(null, instances);
                        });
                    });
                    req.on('error', function(e) {
                        cb(e, null);
                    });
                    req.write(b);
                    req.end();
                }
            },
            function(err, results) {
                if(err) {
                    res.writeHead(500);
                    res.end();
                } else {
                    var resBody = {
                        'instances': results
                    };
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });
                    res.write(JSON.stringify(resBody));
                    res.end();
                }
            });
        }
    });

    // Instances List API
    app.get('/v1/instances', function(req, res) {
        async.parallel({
            fws: function(cb) {
                http.get('http://etcd.localhost/v2/keys/soa4j/@servers', function(resp) {
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
                            servers.push(node.key.substring(node.key.lastIndexOf('/') + 1));
                        }
                        cb(null, servers);
                    });
                }).on('error', function(e) {
                    cb(e, null)
                });
            },
            uat: function(cb) {
                http.get('http://etcd.localhost.com/v2/keys/soa4j/@servers', function(resp) {
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
                            servers.push(node.key.substring(node.key.lastIndexOf('/') + 1));
                        }
                        cb(null, servers);
                    });
                });
            },
            prod: function(cb) {
                http.get('http://localhost.com/v2/keys/soa4j/@servers', function(resp) {
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
                                servers.push(node.key.substring(node.key.lastIndexOf('/') + 1));
                            }
                            cb(null, servers);
                        });
                });
            }
        },
        function(e, results) {
            if(e) {
                res.writeHead(500);
                res.end();
            } else {
                var resBody = {
                    'instances': results
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(resBody));
                res.end();
            }
        });
    });

    // Drop out one instance
    app.delete('/v1/instance/:env/:ip', function(req, res) {
        var env = req.params.env,
            ip = req.params.ip;

        var options = {
          uri: '',
          method: 'PUT',
          form: {
            'value': 'Down'
          }
        };

        request(options, function(err, resp, body) {
        });
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
        });
    });
}
