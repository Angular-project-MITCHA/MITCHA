var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var clothing= require("../model/clothing")
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
}); 







router.get('/list', function (req, resp) {
  console.log(req.query)
  const pageSize= +req.query.pagesize;
  const currentPage= +req.query.page;
  let fetchedBags;
  const mong=mongoose.model('clothing').find(function (err, data) {
     resp.json(data);
   })
  //  const mong=mongoose.model('jewerly').find() 
   if(pageSize && currentPage){
    mong.skip(pageSize * (currentPage - 1))
  .limit(pageSize)
  }
  mong.then(comingBags =>{
    fetchedBags=comingBags;
    return mongoose.model('clothing').count()
   //  resp.status(200).json(po)
  }).then(count =>{
   resp.status(200).json({
     cbag:fetchedBags,
     maxBags:count
   })
  })  
})
 

// list bag details

router.get('/clothingdetails/:_id',function(req,resp){

     
  var _id=req.params._id;
 
 mongoose.model('clothing').findOne({_id:_id},function(err,data){

  resp.json(data);

 })

})
 

// get 3 records
router.get('/random',function(req,resp){

  var tenBags=[];
    mongoose.model('clothing').find(function(err,data){
      for (i=0; i<3; i++)
      {
        tenBags[i]=data[i];
      }
      resp.send(tenBags);
  })
  
  })
  
  

module.exports = router;
