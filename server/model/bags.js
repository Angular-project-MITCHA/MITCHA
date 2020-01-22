var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bags = new Schema({
    name:String,
    price:Number,
    designer:String,
    description:String,
    images:[String]

});
mongoose.model("bags",bags);