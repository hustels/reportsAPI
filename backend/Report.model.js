var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReportSchema = new Schema({
	environment:  String,
	date: { type: Date},
	session:  String,
	specification:  String,
	hostfilesystem: String,
	incident: String,
	link: String,
	endok:  String,
	notes:  String


});


module.exports = mongoose.model('Report' , ReportSchema);