const http = require("http");
console.log("it will run first");
const server = http.createServer((req, res) => {
  //here we will run it everyTime we get request
  console.log("we are getting request from server");
  res.end("we are sending response to server");
});
server.listen(5000, () => {
  console.log("server is listening to port 5000");
});
