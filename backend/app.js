var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Report = require('./Report.model');
var db = 'mongodb://localhost/bkreports';

mongoose.connect(db);

var port = 8080;


app.get('/' , function(req , res){
	res.send("Reports bakcups");

})


app.get('/reports' , function(req , res){

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	Report.find({}).exec(function(err , reports){
		if(err){
			res.send('An error was thrown');
		}else{
			res.json(reports);
		}


	});

})

app.get('/report/:id' , function(req , res){

	Report.findOne({
		_id:  req.params.id

	}).exec(function(err , reports){
		if(err){
			res.send('An error was thrown');
		}else{
			res.json(reports);
		}


	});

})

app.listen(port, function(){
	console.log('listening on port ' + port);
});