require("express-async-errors");
var winston = require("winston");
var error = require("./middleware/error");
var config = require("config");
var express = require("express");
var mongoose = require("mongoose");
var joi = require("joi");
var hpp = require("hpp");
var ratelimit = require("express-rate-limit");
var helmet = require("helmet");
var fs = require("fs");
var mongosanatize = require("express-mongo-sanitize");
var xss = require("xss-clean");
var app = express();
winston.configure({
  transports: [
    new winston.transports.File({
      filename: "logfile.log"
    })
  ]
});

// winston.add(new winston.transports.File(), { filename: "logfile.log" });
var users = require("./controller/user");
var login = require("./controller/login");
var limiter = ratelimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this ip,Please try again in an hour !"
});

app.use("/MITCHA/signup", users);
app.use("/MITCHA/login", login);
//limit number of requests from the same ip address
app.use("/MITCHA", limiter);
//http security headers
app.use(helmet());
//data sanitization against nosql query injection
app.use(mongosanatize());
//data sanitization against xss
app.use(xss());
//prevent parameter pollution
app.use(hpp());
app.use(express.static("public"));
app.use(function(req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
app.use(error);

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
files_arr.forEach(function(file) {
  require(__dirname + "/model/" + file);
});
if (!config.get("jwtprivatekey")) {
  console.error("jwtprivatekey undefined");
  process.exit(1);
}
app.listen(8080, function() {
  console.log("server created");
});
