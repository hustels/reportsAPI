var express = require('express');

var router = express.Router();

//var mongoose = require('mongoose');
var Report = require('../Report.model');

//var db = 'mongodb://localhost/bkreports';




router.post('/reports' , function(req , res){
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	if (typeof(req.query.jtStartIndex ) != undefined && typeof(req.query.jtPageSize != undefined)){		
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
	.select('notes').skip(parseInt(req.query.jtStartIndex)).limit(parseInt(req.query.jtPageSize ));
	}

    query.exec(function (err, rows) {
    	//var dataset = rows;
    	var dataset = {};

          	var total = Report.count();
        	total.exec(function(err , count){
        	var  jtPageSize = req.query.jtPageSize;
    		var jtStartIndex =  req.query.jtStartIndex;
        	dataset.Result = "OK";
        	dataset.jtStartIndex = jtStartIndex;
    		dataset.jtPageSize = jtPageSize;
    		dataset.TotalRecordCount = count;
    		dataset.Records = rows;

        	res.send(dataset);
        	
        })
    });

})


router.post('/reports/delete' , function(req , res){
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
router.post('/reports/add' , function(req , res){
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


router.get('/report/:id' , function(req , res){

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



// udpate record

router.post('/reports/update' , function(req , res){

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


// ################################# API URLS  ######################################################
router.get('/reports' , function(req , res){

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

module.exports = router;