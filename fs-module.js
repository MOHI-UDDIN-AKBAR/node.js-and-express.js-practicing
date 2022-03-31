//sync way

// const { readFileSync, writeFileSync } = require("fs");

// //if we want to read file from first.txt and second.txt files from content dir than
// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");
// // console.log(first, second);
// //if we want write something
// writeFileSync(
//   "./content/result.txt",
//   `In content file already have two file, content of first file is : ${first} and second file ${second}`,
//   { flag: "a" } //if we want to add more. if we don't write flag then whatever in result.txt it will be replace
// );

//Async way

const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    writeFile(
      "./content/result.txt",
      `In content file already have two file, content of first file is : ${first} and second file ${second}`,
      (err, result) => {
        if (err) {
          return;
        }
        console.log(result);
      }
    );
  });
});
