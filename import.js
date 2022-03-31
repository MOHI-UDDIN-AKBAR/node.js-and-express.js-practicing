// const names = require("./variables");
// console.log(names);
// output: { nameOne: 'arafat', nameTwo: 'rifat' }
// or
//since we es6, i mean destructure
// const { nameOne, nameTwo } = require("./variables");
// console.log(nameOne, nameTwo);
// // importing function from function file
// const sayHi = require("./functions");
// console.log(sayHi);
// sayHi(nameOne);
// sayHi(nameTwo);

const { items, names } = require("./variables");

// console.log(nameOne, nameTwo);
// importing function from function file
const { nameOne, nameTwo } = names;
const sayHi = require("./functions");
console.log(sayHi);
sayHi(nameOne);
sayHi(nameTwo);
console.log(items);
