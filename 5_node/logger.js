const EventEmitter = require('events')

//npm install uuid
const uuid = require('uuid')
// for creating a unique random id
// console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg){
        this.emit('message', {id:uuid.v4(), msg:msg})
        this.on('message', (data) => console.log('called listener:', data))
    }
}

module.exports = Logger


// imported in index.js

// module.exports 
// Link:https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it