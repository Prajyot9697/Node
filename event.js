const EventEmitter =require('events');

const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log("My Name is Sanket Rangari");
})
event.on('checkPage',(age,msg)=>{
    console.log(`My Age is ${age} and I'm ${msg}`);
})
event.emit('sayMyName');
event.emit('checkPage',20,'fine');