var mongoose = require("mongoose");
var joi = require("joi");

var users = mongoose.model("users", new mongoose.Schema({
  firstname: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: true
  },
  secondname: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true
  },
  isadmin: Boolean
}));

function validateuser(user) {
  var schema = {
    firstname: joi.string().min(3).max(50).required(),
    secondname: joi.string().min(3).max(50).required(),
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(255).required()
  };
  return joi.validate(user, schema)
}

exports.validate = validateuser;
exports.users = users;
