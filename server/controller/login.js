var config = require("config")
var jwt = require("jsonwebtoken");
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose")
var bcrypt = require("bcryptjs")
var joi = require("joi")
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
var {
  users
} = require("../model/user");

router.post("/", parseUrlencoded, async (req, res) => {
  var {
    error
  } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let user = await users.findOne({
    email: req.body.email
  });
  if (!user) {
    return res.status(400).send("invalid email or password.");
  }
  var validepassword = await bcrypt.compare(req.body.password, user.password);
  if (!validepassword) {
    return res.status(400).send("invalid email or password.");

  }
  var token = jwt.sign({
    _id: user._id
  }, config.get('jwtprivatekey'))
  res.send(token)

});

function validate(req) {
  var schema = {
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(255).required()
  };
  return joi.validate(req, schema)
}

module.exports = router;
