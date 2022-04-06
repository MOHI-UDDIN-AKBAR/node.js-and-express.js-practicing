const app = require("express")();
const products = require("./data");
//here is basic html text and a link
app.get("/", (req, res) => {
  res.send('<h1>Home Page </h1><a href="/api/products">Products</a>');
});
// //sending whole products object
// app.get("/api/products/", (req, res) => {
//   res.json(products);
// });
//if we want to send everything except major than
app.get("/api/products/", (req, res) => {
  const newProducts = products.map((products) => {
    const { id, name, age } = products;
    return { id, name, age };
  });
  res.json(newProducts);
});
//now here we will use route params
app.get("/api/products/:productId", (req, res) => {
  //if after semiColumn we usually get params
  console.log(req.params); //we can see about params here // if user search /api/products/3 than params is {productId:3}
  // that mean user want object that have id number 3 .so solve this problem we destructure productId from params
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  console.log(singleProduct);
  if (!singleProduct) {
    //id there singleProduct than we are sending error with status code (singleProduct==undefined)
    return res.status(404).send("No such Product");
  }
  return res.json(singleProduct);
});
//if we have a complex url where route params could be more than 1 for example
app.get("api/products/:productId/reviews/:reviewId", (req, res) => {
  // here id two param if user search api/products/:2/reviews/:3
  console.log(req.params); //output {productId:2,reviewId:3}
  res.send("HEllo world"); //we are doing nothing . just for understating params
});
app.listen(3000, () => {
  console.log("port is listening 3000...");
});
