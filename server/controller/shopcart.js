var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Product = require('../model/product');
const bags=require('../model/bags');

// const Products=require('../model/Products') 
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
}); 


router.get('/show',function(req,res){     
    req.user
    .populate('cart.items.productId')
    .execPopulate()   //to return promis
    .then(user => {
      const products=user.cart.items; 
       res.json(products);

    })
    .catch(err => console.log(err));
} )

router.get('/cart/:id',function(req,res){ 
    var id=req.params.id; 
    console.log(id)
    // var _id=req.body.proId;
    bags.findById(id)
   .then(product => {
     console.log(product);
    return req.user.addToCart(product);
  }).then(result => {
    console.log(result); 
  }); 
     
  })


router.get('/deleteCart/:id',function(req,res){ 
    var id=req.params.id;
    req.user
    .removeFromCart(id).then(result => {
      console.log('item Deleted'); 
    })
    .catch(err => console.log(err)); 
  })  
module.exports = router;
   