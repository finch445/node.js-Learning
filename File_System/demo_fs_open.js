//create a new, empty file using the open() method

var fs =require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file){ //w is for writing
	if (err) throw err;
	console.log('Saved!!');
});

