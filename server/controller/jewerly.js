var express = require("express")
var route = express.Router()
var app = express()

var bodyParser = require("body-parser")

var mongoose = require("mongoose")

app.set("viewengine", "ejs");
app.set("views", "./views");
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
route.post("/MITCHA/jewelry", parseUrlencoded, function (req, resp) {

  var jewModel = mongoose.model("jewerly");
  var jew = new jewModel();
  jew.name = req.body.name;
  jew.price = req.body.price;
  jew.designer = req.body.designer;
  jew.description = req.body.description;
  jew.images = req.body.images;
  resp.send();
  resp.end();
})

route.get('/MITCHA/jewelry', function (req, resp) {
  mongoose.model("jewerly").find(function (err, data) {

    // console.log(data.name);
    resp.render("./MITCHA/jewelry", {
      jew_data: data
    })

  })
})
module.exports = route;
