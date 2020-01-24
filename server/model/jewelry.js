var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var jewelry = new Schema({
    name:String,
    price:Number,
    designer:String,
    description:String,
    images:[String]

});
mongoose.model("jewelry",jewelry);
