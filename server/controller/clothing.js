var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
}); 

router.get('/list',function(req,resp){
  console.log(req.query)
  const pageSize= +req.query.pagesize;
  const currentPage= +req.query.page;
  let fetchedclothing;
  const mong=mongoose.model('clothing').find()
   
  if(pageSize && currentPage){
    mong.skip(pageSize * (currentPage - 1))
  .limit(pageSize)
  }
   mong.then(comingclothing =>{
    fetchedclothing=comingclothing;
     return mongoose.model('clothing').count()
    //  resp.status(200).json(po)
   }).then(count =>{
    resp.status(200).json({
      cclothing:fetchedclothing,
      maxclothing:count
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
router.get('/search/:name',function(req,resp){

     
  var name=req.params.name;
 
 mongoose.model('clothing').find({"name": {"$regex": name}},function(err,data){
  if(data.length!=0)

  resp.json(data);
  else
  resp.send("Not found");

 })
})
 
module.exports = router;
