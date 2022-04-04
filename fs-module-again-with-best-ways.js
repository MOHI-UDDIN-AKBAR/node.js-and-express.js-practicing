// //first way
// const { readFile, writeFile } = require("fs");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// // getText("./content/first.txt")
// //   .then((response) => console.log(response))
// //   .catch((error) => console.log(error));

// //we can use async and await instead than and catch because everyTime we call getText we have to go through than and catch

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     // now if we want to read another file than
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

// //second way without creating promise and using util

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromises = util.promisify(readFile);
// const writeFilePromises = util.promisify(writeFile);
// const start = async () => {
//   try {
//     const first = await readFilePromises("./content/first.txt", "utf8");
//     // now if we want to read another file than
//     const second = await readFilePromises("./content/second.txt", "utf8");
//     console.log(first, second);
//     // now if want to write
//     await writeFilePromises(
//       "./content/result.txt",
//       `first: ${first} , second: ${second}`,
//       //if we want to add whatever in result.txt file already than we can add flag object
//       { flag: "a" }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

//last and  Best way is

const { readFile, writeFile } = require("fs").promises; //we are adding promises here

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    // now if we want to read another file than
    const second = await readFile("./content/second.txt", "utf8");
    console.log(first, second);
    // now if want to write
    await writeFile(
      "./content/result.txt",
      `first: ${first} , second: ${second}`
      //if we want to add whatever in result.txt file already than we can add flag object
      //   { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};
start();
