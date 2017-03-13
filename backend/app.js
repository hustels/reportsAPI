var cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Report = require('./Report.model');
var db = 'mongodb://localhost/bkreports';
var Veeam = require('./Veeam.model');
var Oracle = require('./Oracle.model');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

mongoose.connect(db);

var port = 8080;


app.get('/' , function(req , res){
	res.send("Reports bakcups");

})

//############################## DATAPROTECTOR BACKUP #################################################
app.post('/reports' , function(req , res){
	
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
//############################## END DATAPROTECTOR BACKUP #################################################


//############################## VEEAM BACKUP #################################################

// Veeam reports
app.post('/reports/veeam' , function(req , res){
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	if (typeof(req.query.jtStartIndex ) != undefined && typeof(req.query.jtPageSize != undefined)){		
	var query = Veeam.find({})
	.select('_id')
	.select('environment')

	.select('objects')
	.select('date')
	.select('retries')
	.select('type')
	.select('reprocessed')
	.select('link')
	.select('endok')
	.select('notes').skip(parseInt(req.query.jtStartIndex)).limit(parseInt(req.query.jtPageSize ));
	}

    query.exec(function (err, rows) {
    	//var dataset = rows;
    	var dataset = {};

          	var total = Veeam.count();
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

// add veeam report
app.post('/reports/veeam/add' , function(req , res){
	


	
	Veeam.insertMany({
	environment:  req.body.environment,
	date: req.body.date,
	objects:  req.body.objects,
	specification:  req.body.specification,
	retries: req.body.retries,
	type: req.body.type,
	reprocessed: req.body.reprocessed,
	
	link: req.body.link,
	//link: req.body.link,
	endok:  req.body.endok,
	notes:  req.body.notes
	}, function(err , docs){
		if(err){
			console.log(err);
		}else{
			//console.log(docs);

		lastestone= Veeam.findOne({}).sort({_id:-1}).limit(1);
	
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

// delete veeam report
app.post('/reports/veeam/delete' , function(req , res){
	Veeam.remove({ _id: req.body._id }, function(err) {
    if (!err) {
          	res.send({"Result": "OK"});
    }
    else {
            message.type = 'error';
    }
	});

})
// udpate  veeam record

app.post('/reports/veeam/update' , function(req , res){

	Veeam.findOne({ _id: req.body._id }, function (err, doc){
	

	doc.environment= req.body.environment;
	doc.date= req.body.date;

	doc.specification=  req.body.specification;
	doc.objects= req.body.objects;
	doc.type= req.body.type;
	doc.reprocessed= req.body.reprocessed;
	
	doc.link= req.body.link;
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
//############################## END VEEAM BACKUP #################################################


//############################## oracle BACKUP #################################################
app.post('/reports/oracle' , function(req , res){
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	if (typeof(req.query.jtStartIndex ) != undefined && typeof(req.query.jtPageSize != undefined)){		
	var query = Oracle.find({})
	.select('_id')
	.select('dbname')
	.select('host')
	.select('lastbk')
	.select('date')
	.select('numfailed')
	.select('type')
	.select('reprocessed')
	
	.select('link')
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




app.post('/reports/oracle/delete' , function(req , res){
	Oracle.remove({ _id: req.body._id }, function(err) {
    if (!err) {
          	res.send({"Result": "OK"});
    }
    else {
            message.type = 'error';
    }
	});

})


// add oracle report 
app.post('/reports/oracle/add' , function(req , res){
	console.log(req.body.endok);
	console.log(req.body.session);


	
	Oracle.insertMany({
	dbname:  req.body.dbname,
	date: req.body.date,
	host:  req.body.host,
	lastbk:  req.body.lastbk,
	numfailed: req.body.numfailed,
	type: req.body.type,
	reprocessed: req.body.reprocessed,

	link: req.body.link,
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

// udpate oracle record

app.post('/reports/oracle/update' , function(req , res){

	Oracle.findOne({ _id: req.body._id }, function (err, doc){
	

	doc.dbname= req.body.dbname;
	doc.date= req.body.date;
	doc.lastbk=  req.body.lastbk;
	doc.host=  req.body.host;
	doc.numfailed= req.body.numfailed;
	doc.type= req.body.type;
	doc.reprocessed= req.body.reprocessed;
	
	doc.link= req.body.link;
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






// SERVER LISTENING AND RUNNING 

app.listen(port, function(){
	console.log('listening on port ' + port);
});