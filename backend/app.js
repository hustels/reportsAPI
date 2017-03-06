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


app.post('/reports' , function(req , res){

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	/*
	Report.find({}).exec(function(err , reports){
		if(err){
			res.send('An error was thrown');
		}else{
			res.json(reports);
		}


	});
	*/
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

app.post('/reports/delete' , function(req , res){
	Report.remove({ _id: req.body._id }, function(err) {
    if (!err) {
          	res.send({"Result": "OK"});
    }
    else {
            message.type = 'error';
    }
	});

})


// add report
app.post('/reports/add' , function(req , res){
	console.log(req.body.endok);
	console.log(req.body.session);


	
	Report.insertMany({
	environment:  req.body.environment,
	date: req.body.date,
	session:  req.body.session,
	specification:  req.body.specification,
	hostfilesystem: req.body.hostfilesystem,
	type: req.body.type,
	reprocessed: req.body.reprocessed,
	newsession: req.body.newsession,
	incident: req.body.incident,
	//link: req.body.link,
	endok:  req.body.endok,
	notes:  req.body.notes
	}, function(err , docs){
		if(err){
			console.log(err);
		}else{
			//console.log(docs);

		lastestone= Report.findOne({}).sort({_id:-1}).limit(1);
	
	    lastestone.exec(function (err, rows) {
    	//var dataset = rows;
    	//console.log(rows);

    	var dataset = {};
    	dataset.Result = "OK";
    	dataset.Record = rows;
    	res.json(dataset);

        if (err) return next(err);
          });

		}

	})
	
	
	

	

})

// udpate record

app.post('/reports/update' , function(req , res){
	console.log('la nueva es ' + req.body.newsession);
	Report.findOne({ _id: req.body._id }, function (err, doc){
	

	doc.environment= req.body.environment;
	doc.date= req.body.date;
	doc.session=  req.body.session;
	doc.specification=  req.body.specification;
	doc.hostfilesystem= req.body.hostfilesystem;
	doc.type= req.body.type;
	doc.reprocessed= req.body.reprocessed;
	doc.newsession = req.body.newsession;
	doc.incident= req.body.incident;
	//link: req.body.link,
	doc.endok=  req.body.endok;
	doc.notes=  req.body.notes;

	 if( doc.save()){
	 	//console.log('Was saved');
	 	res.send({"Result": "OK"});
	 }else{
	 	console.log('An error was thrown');
	 }
	});
})


// API URLS
app.get('/reports' , function(req , res){

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	/*
	Report.find({}).exec(function(err , reports){
		if(err){
			res.send('An error was thrown');
		}else{
			res.json(reports);
		}


	});
	*/
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

})

app.listen(port, function(){
	console.log('listening on port ' + port);
});