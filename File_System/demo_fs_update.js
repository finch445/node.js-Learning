// Append "This is my update text." to the end of the file "mynewfile1.txt"
// fs.appendFile() will append the specified content at the end of the specified file
// original file: Hello content!! -> update: Hello content!!This is my update text

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my update text', function(err){
	if(err) throw err;
	console.log('Updated!!');
});