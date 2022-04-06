const app = require("express")();
//import functions
const { logger, authorize } = require("./functions");
//now if we want to use both function than ?
//we can easily use it by put them in a array
// app.use([logger, authorize]); // since logger is front than logger run first and then authorize we can see in console
// if we want we can specify an url as well
// so
app.use("/api", logger); //now we have to search like '/api/',/api/about' like this. first api than other routes
app.get("/", (req, res) => {
  res.send("Home Page");
});
// same with '/about'
app.get("/about", (req, res) => {
  //now we can see logger function is working only for about
  res.send("about page");
});
// we can use function in a specific route as well
app.get("/api/products", [authorize, logger], (req, res) => {
  res.send("Products");
});
app.listen(3000, () => {
  console.log("port is listing at 3000...");
});
