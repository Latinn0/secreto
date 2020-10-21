/*var redis = require('redis'),
    redisClient = redis.createClient({host : 'redis-16091.c240.us-east-1-3.ec2.cloud.redislabs.com', port : 16091});
redisClient.auth('esWRiIcCacfILQXNlzZHZGLnxXjIlKzt',function(err,reply) {
  if(!err) {
		console.log("1/1c Ok");
	}else{
		console.log('0/1c Ok');
	}
});

redisClient.on('ready',function() {
	console.log("2/2s Ok");
});

redisClient.on('error',function() {
	console.log("0/2s Ok");
});

var WebSocketServer = require("ws").Server,
    http = require("http"),
    express = require("express"),
    app = express(),
    port = process.env.PORT || 5000


app.get('/reset', function(req, res) {
	redisClient.set('adminadmin',JSON.stringify({"password":"admin273564533"}),function(err2,reply2){
		console.log("0/2b Ok");
	});
	res.statusCode = 200;
	res.end('Reset active');
});

var server = http.createServer(app)
server.listen(port);

console.log("init in port %d", port)

var wss = new WebSocketServer({server: server})

wss.options.maxPayload = 512 * 1024;
wss.options.server.timeout = 120000;
wss.options.server.keepAliveTimeout = 5000;

redisClient.set('adminadmin',JSON.stringify({"password":"admin273564533"}),function(err2,reply2){
	console.log("0/2b Ok");
});


wss.on("connection", function(ws,req) {

	ws.on('message', function incoming(data2) {

		try{
			var text = JSON.parse(data2);

			var ejecucion = require('./modelos/'+text.r+'');
			ejecucion(text.d,text.r,redisClient).then(function(info) {
				ws.send(JSON.stringify({"e":false,"d":info}));
			}).catch(function(err) {
				ws.send(JSON.stringify({"e":true,"d":err}));
			});

		}catch(e){
			ws.send(JSON.stringify({"e":true,"d":e}));
		}

	});

});
redisClient.auth("esWRiIcCacfILQXNlzZHZGLnxXjIlKzt", function (err, result) {
	console.log(err, result);
  });
  */