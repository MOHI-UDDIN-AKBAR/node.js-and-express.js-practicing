const EventEmitter = require("events");

const customEmitter = new EventEmitter();
//there is so many method of customEmitter object but most important is on and emit method
//each listener event have event name and call-back function like js
customEmitter.on("response", () => {
  console.log("Hello world");
});

//if we want to listen same event again we can and also if we want to pass any arguments we can
customEmitter.on("response", (name, age) => {
  console.log(`Hello, i am ${name} and ${age} years old`);
});
//at the end we have to emit the event and if we are passing something to our call back function we have to send it though emit
customEmitter.emit("response", "arafat", 23);
