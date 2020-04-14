// read Query String
// e.g. http://172.16.60.250:8080/summer
// page show: /summer

var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url)
	res.end();
}).listen(8080);