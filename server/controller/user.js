var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
var { validate, users } = require("../model/user");

router.post("/", parseUrlencoded, async (req, res) => {
  var { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let user = await users.findOne({
    email: req.body.email
  });
  if (user) {
    return res.status(400).send("user already registered.");
  }
  user = new users({
    firstname: req.body.firstname,
    secondname: req.body.secondname,
    email: req.body.email,
    password: req.body.password
  });
  console.log(user.password);
  var salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(user);
});

module.exports = router;
