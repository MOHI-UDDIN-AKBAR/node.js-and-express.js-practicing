const http = require("http");
const server = http.createServer();
//here we will use request event for server. how we know this even ? if we in node.js website and in documentation we will find that server can listen few events and request is one of them
server.on("request", (req, res) => {
  res.end("welcome");
});
server.listen(3000);
