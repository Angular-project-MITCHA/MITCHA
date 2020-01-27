var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});

route.get('/list', function (req, resp) {
  console.log(req.query)
  const pageSize= +req.query.pagesize;
  const currentPage= +req.query.page;
  let fetchedBags;
  const mong=mongoose.model('jewerly').find(function (err, data) {
     resp.json(data);
   })
  //  const mong=mongoose.model('jewerly').find() 
   if(pageSize && currentPage){
    mong.skip(pageSize * (currentPage - 1))
  .limit(pageSize)
  }
  mong.then(comingBags =>{
    fetchedBags=comingBags;
    return mongoose.model('jewerly').count()
   //  resp.status(200).json(po)
  }).then(count =>{
   resp.status(200).json({
     cbag:fetchedBags,
     maxBags:count
   })
  })  
})

route.get('/jewelrydetails/:_id', function (req, resp) {
  mongoose.model("jewerly").findOne({
    _id: req.params._id
  }, function (err, data) {
    resp.json(data);
  })
})

module.exports = route;
