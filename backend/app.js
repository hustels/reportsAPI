var cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Report = require('./Report.model');
var db = 'mongodb://localhost/bkreports';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

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


// add report
app.post('/reports/add' , function(req , res){
	console.log(req.body.endok);
	/*
	Report.insertMany({
	environment:  req.body.enivironment,
	date: req.body.date,
	session:  req.body.session,
	specification:  req.body.specification,
	hostfilesystem: req.body.hostfilesystem,
	incident: req.body.incident,
	//link: req.body.link,
	endok:  req.body.endok,
	notes:  req.body.notes
	}, function(err , docs){
		if(err){
			console.log(err);
		}else{
			//console.log(docs);
		}

	})
	
	*/
	

	res.send('Adding report from the backed');

})

app.listen(port, function(){
	console.log('listening on port ' + port);
});