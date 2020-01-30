var mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var joi = require("joi");

var users =new Schema({
  firstname: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: true
  },
  secondname: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true
  },
  isadmin: Boolean,
  cart:{
    items:[
        {
            productId:{type:Schema.Types.ObjectId,ref:'bags',required:true},
            quantity:{type:Number,required:true} 
             
        }
    ] 
}

});

users.methods.addToCart=function(product){       
  const cartProductIndex = this.cart.items.findIndex(cp => {
      return  cp.productId.toString() === product._id.toString();
     });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];
        
  if (cartProductIndex >= 0) {
     newQuantity = this.cart.items[cartProductIndex].quantity + 1;
     updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
     updatedCartItems.push({
     productId:product._id ,
     quantity: newQuantity 
       });
    }
  const updatedCart = {items: updatedCartItems};
  this.cart=updatedCart;
  return this.save(); 
}
users.methods.removeFromCart=function(productId){
  const updatedCartItems=this.cart.items.filter(item =>{
      return (item.productId.toString()!==productId.toString())
  })
  this.cart.items=updatedCartItems;
  return this.save();
}    




function validateuser(user) {
  var schema = {
    firstname: joi.string().min(3).max(50).required(),
    secondname: joi.string().min(3).max(50).required(),
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(255).required()
  };
  return joi.validate(user, schema)
}

exports.validate = validateuser;
// exports.users = users;

module.exports=mongoose.model('users',users);