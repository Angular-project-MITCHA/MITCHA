var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var clothings = new Schema({
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
    code:String


},
{collection:"clothing"}
);
mongoose.model("clothing",clothings);