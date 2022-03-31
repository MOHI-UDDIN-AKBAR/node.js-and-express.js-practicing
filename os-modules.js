const os = require("os");
//we can know userInfo using os modules
const user = os.userInfo();
// console.log(user);
// we can see the uptime(running time of system in second) using os modules
console.log(`The system uptime is ${os.uptime()} seconds`);

//we can know about our own current operating system using os
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
