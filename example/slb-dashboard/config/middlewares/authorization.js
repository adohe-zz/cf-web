/**
 * Generica require login middleware
 */
exports.requiresLogin = function(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

exports.service = function() {
  hasAuthorization: function(req, res, next) {
    if(req.service.owner != req.user) {
    }
    next();
  }
}
