const EventEmitter = require('events');
const event = new EventEmitter();

event.on('multiplication',(num1,num2)=>{
    console.log(`The mutiplication of ${num1} and ${num2} is ${num1*num2}`)
})
event.emit('multiplication',5,3);