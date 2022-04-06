const { response } = require("express");

const app = require("express")();
// what is middleware ? for example there is a function call logger and our route '/' and '/about' both want to use logger function
// that time we use middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(method, url, year);
  //if we want we can send response from here as well than response inside of callback function will not work
  //   res.send("Home")
  // its better to send response from callback , so we should use next()
  next(); //here we are using next means after this function run than it will callback function of route
};
//now if we want to use logger function than

// version one
app.get("/", logger, (req, res) => {
  res.send("Home Page");
});
// same with '/about'
app.get("/about", logger, (req, res) => {
  res.send("about page");
});
//we can see everything in console

// version Two
// there could be so many route and if all route want to use same function than we have to add function with every route
//but there is a way that express make easy
// app.use(logger); //using use method all route can use logger function
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use(logger); // if we replace use method here than '/' can not use logger function
// same with '/about'
app.get("/about", (req, res) => {
  //now we can see logger function is working only for about
  res.send("about page");
});
app.listen(3000, () => {
  console.log("port is listing at 3000...");
});
