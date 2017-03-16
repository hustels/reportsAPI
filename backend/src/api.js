var mongoose = require('mongoose');

var Report = require('../Report.model');
var db = 'mongodb://localhost/bkreports';


//mongoose.connect(db);

module.exports.get_reports = function (req , res){
		/*
	Report.find({}).exec(function(err , reports){
		if(err){
			res.send('An error was thrown');
		}else{
			res.json(reports);
		}


	});
	*/
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var query = Report.find({})
	.select('_id')
	.select('environment')
	.select('session')
	.select('specification')
	.select('date')
	.select('hostfilesystem')
	.select('type')
	.select('reprocessed')
	.select('newsession')
	.select('incident')
	.select('endok')
	.select('notes');

    query.exec(function (err, rows) {
    	//var dataset = rows;
    	var dataset = {};

    	
    	dataset.Result = "OK";
    	dataset.Records = rows;

        if (err) return next(err);
        res.send(dataset);
    });
}