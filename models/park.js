var mongoose = require('mongoose');

var parkSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
	});
	
module.exports = mongoose.model("Park", parkSchema);