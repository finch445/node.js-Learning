// fs.rename() allow user to rename a file
//Here is a example about rename "mynewfile1.txt" to "myrenamefile.txt"

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamefile.txt', function(err){
	if (err) throw err;
	console.log('the file has been renamend!!');
});