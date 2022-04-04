//using express
const app = require("express")();
//using get method
app.get("/", (req, res) => {
  res.status(200).send("home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About page</h1>");
});
//for error we can use all method
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3000);
