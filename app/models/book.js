var mongoose = require('mongoose');
//schema to our book details
var bookSchema = mongoose.Schema({
firstName:{type:String},
lastName:{type:String},
email:{type:String},
nicNumber:{type:String},
address:{type:String},
phoneNumber:{type:Number},
pickupDate: {type:Date},
pickTime:{type:String},
pickLocation:{type:String},
driver: {type:String},
dropDate: {type:Date},
dropLocation:{type:String},
carId:{type:String}

});


module.exports = mongoose.model('book', bookSchema);
