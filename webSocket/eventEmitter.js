const EventEmitter = require('events');
const myEmitter = new EventEmitter()

console.log(myEmitter)

myEmitter.on('event', () => {
    console.log('first event emitted')
})

myEmitter.emit('event')
