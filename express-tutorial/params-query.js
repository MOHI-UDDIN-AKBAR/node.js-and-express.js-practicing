const app = require("express")();
// what is query ? if user search like /api/v1/query?search=a & limit=2
//that's mean that user wants products that's name start with "a" and user want only 2 result
//here query is whatever is written after "?" there could 100 query
//here v1= version 1
const products = require("./data");
app.get("/api/v1/query", (req, res) => {
  console.log(req.query); // if want to see what query user searched
  //but we want to response if query is search and limit
  //now we know what we want to send
  let { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct = sortedProduct.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct.length < 1) {
    // return res.status(200).send("no such data")
    // or
    //when we are responding in if condition we must return
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProduct);
});
app.listen(3000, () => {
  console.log("port is listening to 3000...");
});
