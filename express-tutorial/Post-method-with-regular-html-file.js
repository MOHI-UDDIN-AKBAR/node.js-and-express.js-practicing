const express = require("express");

const app = express();
//we can use express.static to read index.html file from methods-public
app.use(express.static("./methods-public"));
//now we have to use one more thing is that express.urlencoded ,we can know much better if see about this in documentation of express
app.use(express.urlencoded({ extended: false })); //because we want querystring
//remember in form we use '/login' route, so
app.post("/login", (req, res) => {
  // if we don't use extended than we will get error "Cannot destructure property 'name' of 'req.body' as it is undefined."
  //because express will does not know what is body
  console.log(req.body);
  //by the way if we use in html file in input section name="name" than here name. if we use name="testing" than here would be const {testing}=req.body
  const { name } = req.body;
  // console.log(name);
  //now we can make functionality as want with name
  if (name) {
    return res.send(`welcome ${name}`);
  }
  res.status(401).send("Please, Provide your name"); //401 means unauthorize
});
app.listen(3000, () => {
  console.log("port is listening to 3000...");
});
