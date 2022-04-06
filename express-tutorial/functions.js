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
const authorize = (req, res, next) => {
  // we can make functionality here as well
  //now if user search like ?user=arafat than they get info otherwise they will get an error 401
  const { user } = req.query;
  if (user == "arafat") {
    console.log("You are authorize");
  } else {
    return res.status(401).send("Unauthorize");
  }
  next();
};
module.exports = { logger, authorize };
