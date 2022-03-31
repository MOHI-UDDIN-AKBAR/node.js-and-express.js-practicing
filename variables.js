const secreteVariable = "secrete variable";
const nameOne = "arafat";
const nameTwo = "rifat";
//since we are exporting two variable we can export as a object
// module.exports = { nameOne, nameTwo };
// but if we want to export each item alone than
module.exports.items = ["hello", "hi"];
//since we are exporting two variable we can export as a object
module.exports.names = { nameOne, nameTwo };
