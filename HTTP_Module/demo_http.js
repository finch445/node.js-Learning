var http = require('http');

//create a server object
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	//200 means that all is ok, second argument is an object containing	the response headers 
	//simply say, it will change text font.
	res.write('Hello World!!!'); // write a response to the client
	res.end('this is a test line'); //end the response
}).listen(8080); //the server object listens on port 8080