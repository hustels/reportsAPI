
var express = require('express');

var router = express.Router();
var Oracle = require('../Oracle.model');
//############################## oracle BACKUP #################################################
router.post('/reports/oracle' , function(req , res){
	
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

          	var total = Oracle.count();
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




router.post('/reports/oracle/delete' , function(req , res){
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
router.post('/reports/oracle/add' , function(req , res){
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

		lastestone= Oracle.findOne({}).sort({_id:-1}).limit(1);
	
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

router.post('/reports/oracle/update' , function(req , res){

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


module.exports = router;