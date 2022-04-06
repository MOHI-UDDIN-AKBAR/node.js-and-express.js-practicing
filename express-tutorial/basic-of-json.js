const app = require("express")();
//basic of json
//url could be anything but here for now "/"
// app.get("/", (req, res) => {
//   //just using json with res we can send json data to website
//   res.json([{ name: "Arafat" }, { name: "Rifat" }, { name: "Samir" }]);
// });
//importing products from data.js file
const products = require("./data");
app.get("/", (req, res) => {
  res.json(products);
});
app.listen(3000, () => {
  console.log("port is listing to 3000...");
});
