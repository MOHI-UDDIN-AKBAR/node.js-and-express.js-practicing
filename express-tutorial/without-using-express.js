const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    //if url is '/' than we are responding and we are responding status code 200 that mean everything is ok and also telling that we are going to response html content
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home page</h1>");
    res.end();
  } else if (url == "/about") {
    //same way
    res.writeHead(200, { "content-type": "text/plain" });
    //since we told that plain that means server will response exactly same without understanding that it's a html content <h1>About page</h1>
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    //   if user type different url than we are saying that status code is 404
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found page</h1>");
    res.end();
  }
});
server.listen(3000);
