var http = require('http');
var daytime = require('./myfirstmodule');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time are currently: " + daytime.myDateTime());
	res.end('This is a module test site.');
}).listen(8080);