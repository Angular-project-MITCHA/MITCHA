var config = require("config")
var express = require("express");
var mongoose = require("mongoose");
var http = require("http");
var joi = require("joi");
var bodyparser = require("body-parser");
var fs = require("fs");
var app = express();
var users = require("./controller/user");
var login = require("./controller/login");
var jewelry = require("./controller/jewerly")

app.use("/MITCHA/users", users);
app.use("/MITCHA/login", login);
app.use("/MITCHA/jewelry", jewelry);
app.use(express.static("public"));
app.use(function (req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
app.all("*", (req, resp, next) => {
  resp.status(404).send("cant find this url");
});
app.set("viewengine", "ejs");
app.set("views", "./views");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/angularproject");

mongoose.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

var files_arr = fs.readdirSync(__dirname + "/model");
files_arr.forEach(function (file) {
  require(__dirname + "/model/" + file);
});
// if (!config.get('jwtprivatekey')) {
//   console.error("jwtprivatekey undefined");
//   process.exit(1)
// }
app.listen(8080, function () {
  console.log("server created");
});
