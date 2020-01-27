var jwt = require("jsonwebtoken")
var config = require("config")

function admin(req, resp, next) {
  if (!req.user.isadmin) {
    return resp.status(403).send('access denied')
  }
  next()
}
module.exports = admin;
