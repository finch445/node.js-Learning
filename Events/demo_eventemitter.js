// Events module
var events = require('events');
var eventEmitter = new events.EventEmitter();

/* In the example below we created a dunction that will
be excuted when a "scream" event is fired. */

//Create an event handler:
var myEventHandler = function() {
	console.log('I hear a scream.');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');