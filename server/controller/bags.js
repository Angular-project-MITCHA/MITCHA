var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});

// list all bags from DB
router.get('/list',function(req,resp){
    mongoose.model('bags').find(function(err,data){
        resp.json(data);
    })
    
})
 

// list bag details

router.get('/bagdetail/:_id',function(req,resp){

     
  var _id=req.params._id;
 
 mongoose.model('bags').findOne({_id:_id},function(err,data){

  resp.json(data);

 })

})
 

module.exports = router;
