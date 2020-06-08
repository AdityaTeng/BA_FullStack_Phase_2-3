const EventEmitter = require('events');

// Create class
// class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new EventEmitter();

// Event listener
myEmitter.on('event', (name='') => console.log('Event Fired by: ', name));

// Init event
myEmitter.emit('event', 'Aditya');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


// Logger.js