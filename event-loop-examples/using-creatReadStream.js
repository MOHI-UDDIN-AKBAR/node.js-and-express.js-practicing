const { createReadStream, readFileSync } = require("fs");
// const http = require("http");
// // method one put in a variable
// const server = http.createServer((req, res) => {
//   //if we put readFile in variable without using steam
//   const text = readFileSync("./content/big.txt");
//   res.end(text);
// });
// //now if go in localhost 5000 we will see that in network in localhost there is content-length instead chunked
// server.listen(3000);

//method two using stream

const http = require("http");
const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./content/big.txt");
  // using events
  fileStream.on("open", () => {
    //instead writing res.end() we can write pipe() because in createReadStream there method pipe that do exact same thing just we have to put response in pipe.pipe work is push from read stream to write stream
    fileStream.pipe(res);
    //now we will see chunked instead content-length
  });
  //we can check the error as well using error events
  fileStream.on("error", (err) => {
    //instead writing res.end() we can write pipe() because in createReadStream there method pipe that do exact same thing just we have to put response in pipe.pipe work is push from read stream to write stream
    console.log(err);
  });
});
//now if go in localhost 5000 we will see that in network in localhost there is content-length instead chunked
server.listen(3000);
