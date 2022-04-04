const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  if (req.url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let i = 0; i < 100; i++) {
        console.log("it will block home page also");
      }
    }
    res.end("this is about page");
  }
});

server.listen(3000, () => {
  console.log("server is listing to 3000");
});
