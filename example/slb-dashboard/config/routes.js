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

    app.all('/v1/services', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    // Services API
    app.get('/v1/services', function(req, res) {
        var data = { "service": {
          "services": [
            {
              "name": "test",
              "namespace": "test",
              "contract": "tony"
            },
            {
              "name": "test2",
              "namespace": "test2",
              "contract": "tony"
            }
          ]
        } };
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(data));
        res.end();
    });
}
