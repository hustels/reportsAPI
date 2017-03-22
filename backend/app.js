var cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var db = 'mongodb://localhost/bkreports';


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
var dataprotector = require('./routes/dataprotector')
var veeam = require('./routes/veeam');
var oracle = require('./routes/oracle');
mongoose.connect(db);

var port = 8080;

app.use(dataprotector); // dataprotector
app.use(veeam); // veeam reports
app.use(oracle); // oracle reports

app.get('/' , function(req , res){
	res.send("Reports bakcups");

})




// realtime

var http = require('http').Server(app);
var io = require('socket.io')(http);



io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('message', "Message from the server");
});

io.on('get-notifications', function(socket){
  io.emit('message', "Message from the server");

  console.log('getting messages');
});







http.listen(port , function(){
  console.log('listening on port ' + port);
});


/*

// SERVER LISTENING AND RUNNING 

app.listen(port, function(){
	console.log('listening on port ' + port);
});

*/