/* open the requested file and return the content to the client.
If anything goes wrong, throw a 404 page error. */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data){
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			console.log("Page not Found");
			return res.end("404 Not Found!!");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log(q.pathname);
		return res.end(q.pathname);
	})

}).listen(8080);