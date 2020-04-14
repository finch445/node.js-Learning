// fs.unlink() can allow user to delete a specified file
// Here is a demo that "mynewfile2.txt" will be deleted.

var fs = require('fs');

fs.unlink('mynewfile2.txt', function(err){
	if (err) throw err;
	console.log('the File has been deleted!!');
});