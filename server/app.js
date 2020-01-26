var express = require("express");
var mongoose = require("mongoose");
var http = require("http");
var joi = require("joi");
var bodyparser = require("body-parser");
var fs = require("fs");
var app = express();
var cors = require('cors');
var users = require("./controller/user");
var login = require("./controller/login");
var jewerly = require("./controller/jewerly");
var bags = require("./controller/bags");

app.use("/MITCHA/users", users);
app.use("/MITCHA/login", login);
app.use("/MITCHA/bags", bags);
app.use("/MITCHA/jewerly", jewerly);
app.use(express.static("public"));
// app.use(function (req, resp, next) {
//   resp.setHeader("Access-Control-Allow-Origin", "*");
//   resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//   // resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // resp.setHeader('Access-Control-Allow-Credentials', true);
//   // resp.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
//   resp.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors());
// app.all("*", (req, resp, next) => {
//   resp.status(404).send("cant find this url");
// });
app.set("viewengine", "ejs");
app.set("views", "./views");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://ourangular:AAAAA@cluster0-b12zn.mongodb.net/AngularDB?retryWrites=true&w=majority");
mongoose.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

var files_arr = fs.readdirSync(__dirname + "/model");
files_arr.forEach(function (file) {
  require(__dirname + "/model/" + file);
});
// app.use("/MITCHA/users", users);
app.listen(5000, function () {
  console.log("server on port 5000");
});
