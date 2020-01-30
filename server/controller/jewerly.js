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
  // const mong=mongoose.model('jewerly').find(function (err, data) {
  //    resp.json(data);
  //  })
   const mong=mongoose.model('jewerly').find() 
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



// get 3 records
route.get('/random',function(req,resp){

  var tenBags=[];
    mongoose.model('jewerly').find(function(err,data){
      for (i=0; i<3; i++)
      {
        tenBags[i]=data[i];
      }
      resp.send(tenBags);
  })
  
  })

route.get('/search/:name',function(req,resp){

     
  var name=req.params.name;
 
 mongoose.model('jewerly').find({"name": {"$regex": name}},function(err,data){
  if(data.length!=0)

  resp.json(data);
  else
  resp.send("Not found");

 })
})

module.exports = route;

