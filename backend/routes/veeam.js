var express = require('express');

var router = express.Router();
var Veeam = require('../Veeam.model');



// Veeam reports
router.post('/reports/veeam' , function(req , res){
	
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
router.post('/reports/veeam/add' , function(req , res){
	


	
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
router.post('/reports/veeam/delete' , function(req , res){
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

router.post('/reports/veeam/update' , function(req , res){

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



module.exports = router;