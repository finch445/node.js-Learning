var http = require('http');
var uc = require('upper-case'); //"uc" means upper case.

var out = uc.upperCase("Hello World!!");
console.log(out);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(uc.upperCase("Hello World!!"));// original: Hello World! -> HELLO WORLD!!
	
	res.end();
	
}).listen(8080);