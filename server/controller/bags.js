var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const bags=require('../model/bags');

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
}); 

router.get('/list',function(req,resp){
  console.log(req.query)
  const pageSize= +req.query.pagesize;
  const currentPage= +req.query.page;
  let fetchedBags;
  const mong=bags.find()
   
  if(pageSize && currentPage){
    mong.skip(pageSize * (currentPage - 1))
  .limit(pageSize)
  }
   mong.then(comingBags =>{
     fetchedBags=comingBags;
     return bags.count()
    //  resp.status(200).json(po)
   }).then(count =>{
    resp.status(200).json({
      cbag:fetchedBags,
      maxBags:count
    })
   })  
})


 

// list bag details

router.get('/bagdetail/:_id',function(req,resp){

     
  var _id=req.params._id;
 
 mongoose.model('bags').findOne({_id:_id},function(err,data){

  resp.json(data);

 })

})



// search bag name

router.get('/search/:name',function(req,resp){

     
  var name=req.params.name;
 
 mongoose.model('bags').find({"name": {"$regex": name}},function(err,data){
  if(data.length!=0)

  resp.json(data);
  else
  resp.send("Not found");

 })

})
 

router.get('/random',function(req,resp){

var tenBags=[];
  mongoose.model('bags').find(function(err,data){
    for (i=0; i<3; i++)
    {
      tenBags[i]=data[i];
    }
    resp.send(tenBags);
})

})


 




module.exports = router;
