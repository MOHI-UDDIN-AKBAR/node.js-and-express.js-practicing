const path = require("path");
//if we want to know path separator in our platform
console.log(path.sep);
//if we want to know join a path
const filePath = path.join("/content", "subcontent", "text.txt");
console.log(filePath);
//if we want basename (basename means last file or dir name of a path ) of a filePath
const base = path.basename(filePath);
console.log(base);
// if we want to see absolute path of a file or dir than
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subcontent",
  "text.txt"
); //we are using __dirname because it give our nodeJS path
console.log(absolutePath);
