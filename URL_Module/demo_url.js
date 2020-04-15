// Split a web address into readable parts

var url = require('url');
var adr = 'http://172.16.60.250:8080/default.htm?year=2020&month=april';
var q = url.parse(adr, true) //parse the address


//The parse method returns an object containing url properties
console.log(q.host); //return: '172.16.60.250:8080'
console.log(q.pathname); //return: 'default.htm'
console.log(q.search); //return: '?year=2020&month=april'


/*The query property returns an object with 
all the querystring parameters as properties:*/
var qdata = q.query; //return an object: { year:2020, month: 'april'}
console.log(qdata.month);
console.log(qdata.year);