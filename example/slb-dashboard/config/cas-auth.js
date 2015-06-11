module.exports = function(app) {

  app.get('/login', function(req, res) {
    res.redirect('/auth/cas/login');
  });

  app.get('/auth/cas/login', function(req, res) {
    var server_url = req.protocol + "//" + req.get('host') + '/auth/cas/login';
  });
}
