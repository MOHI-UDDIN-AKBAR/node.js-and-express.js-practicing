//started operating system process
console.log("This is first console log");
let count = 0;

let timeInterval = setInterval(() => {
  console.log(
    "This is second console log and this will run after first and second console log"
  );
  count++;
  if (count == 5) {
    clearInterval(timeInterval);
  }
}, 0); // although time is 0
console.log("THis is third console log");

//completed and exited operating system
