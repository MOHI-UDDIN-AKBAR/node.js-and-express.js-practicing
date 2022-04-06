const app = require("express")();
const express = require("express");
//we learn before about path
const path = require("path");
//now we already created public folder and transfer all file expect html
//now we can use express.static .static means here that the files that browser does not to change
//we have to use 'use method also'
app.use(express.static("./public"));
app.get("/", (req, res) => {
  //now we have to send file as response
  //we have to tell the path of index.html file
  res.sendFile(path.resolve(__dirname, "./smallProject/index.html"));
});
//we can also create for error
app.get("*", (req, res) => {
  //now we have to send file as response
  //we have to tell the path of index.html file
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3000);
