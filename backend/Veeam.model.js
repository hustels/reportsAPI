var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VeeamSchema = new Schema({
	environment:  String,
	date: { type: Date},
	retries:  String,
	specification:  String,
	objects: String,
	
	reprocessed: String,

	link: String,
	endok:  String,
	notes:  String


});


module.exports = mongoose.model('Veeam' , VeeamSchema);