/**
 * isAllowed
 * @description :: Policy to check if this request goes from our applications
 */

module.exports = function (req, res, next) {
  var token = req.headers['application-token'];

  if (token && token === "95d578a040ff9abd825366b95a9a0114a56b12cfdddaea8fde15f7e23d88e4a4") {
    next();
  } else {
    res.unauthorized(null, null, 'You must provide application token');
  }
};
