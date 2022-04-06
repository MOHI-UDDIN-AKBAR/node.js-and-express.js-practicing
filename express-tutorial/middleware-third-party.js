const app = require("express")();
//here we can use third party as middleware
// for example we want to use morgan than first we have to install it. for install npm i morgan
const morgan = require("morgan");
app.use(morgan("tiny")); // using tiny we can know method,url,status-code,running time
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.listen(3000, () => {
  console.log("port is listing to 3000...");
});
