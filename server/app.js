var express = require("express");
var mongoose = require("mongoose");
var http = require("http");
var joi = require("joi");
var bodyparser = require("body-parser");
var fs = require("fs");
var app = express();
var users = require("./controller/user");
var bags=require("./controller/bags");
app.use(express.static("public"));
app.use(function (req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
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


app.use("/MITCHA/users", users);

app.use("/MITCHA/bags", bags);




app.listen(5000, function () {
  console.log("server on port 5000");
});
