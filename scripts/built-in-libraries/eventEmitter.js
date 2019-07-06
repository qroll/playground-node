// Import events module
const events = require('events');

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter();

const test = () => console.log("abc");
const test2 = () => console.log("abc2");

eventEmitter.addListener('test', test);
eventEmitter.addListener('test', test);
eventEmitter.addListener('test', test2);

eventEmitter.emit('test');

eventEmitter.removeListener('test', test);
// eventEmitter.removeListener('test', test);

eventEmitter.emit('test');