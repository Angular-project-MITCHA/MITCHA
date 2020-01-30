var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Products = new Schema({
    name:String,
    price:Number,
    designer:String,
    description:String,
    images:[String],
    material:String,
    strap:Number,
    height:Number,
    width:Number,
    depth:Number,
    code:String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users' 
      }  
});
module.exports=mongoose.model("Products",Products);
