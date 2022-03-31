const http = require("http");
// const server = http.createServer((req, res) => {
//   // req(request) =  request we will get from server
//   //res(response)=  response that we will send to server
//   //if want to write anything to server we can use
//   res.write("this is my first response that i am sending to server");
//   res.end();
// });

// // we have to mention which port our server will listen
// server.listen(5000);

//now if we can know much more about req and res
const server = http.createServer((req, res) => {
  // console.log(req);//if want to see what is in req
  if (req.url === "/") {
    res.end("This is home page"); //instead res.write we can write inside of res.end
  }
  if (req.url === "/about") {
    res.end("This is about page");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>Sorry, there is no such page that you are looking for </p>
  <a href="/">back to home</a>
  `);
});
server.listen(5000);
