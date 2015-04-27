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
}
