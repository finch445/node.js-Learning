// fs.writeFile() can replace the specified file and content.
//Original: Hello content!~~ Replace: This is my replace text.

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my replace text', function(err){
	if (err) throw err;
	console.log('Replaced!!');
});