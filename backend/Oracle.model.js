var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OracleSchema = new Schema({
	
	date: { type: Date},
	dbname:  String,
	host:  String,
	type:  String,
	lastbk: { type: Date},
	numfailed:  String,
	reprocessed: String,
	link: String,
	endok:  String,
	notes:  String


});


module.exports = mongoose.model('Oracle' , OracleSchema);