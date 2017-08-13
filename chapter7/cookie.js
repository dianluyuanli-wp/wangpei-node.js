var connect = require('connect');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = connect()
	.use(bodyParser())
	.use(function (req,res){
		res.end('Registered new user: ' + req.body.username);
	}).listen(3000);
