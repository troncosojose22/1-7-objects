// importing the entire object
const dictionary = require('./0-basics_index');
// destructuring the imported object
const { hello, rainbow, cat } = require('./0-basics_index');

console.log("\n"); // a new line
console.log('4-destructuring.js');

console.log(`here is the entire dictionary`, dictionary);

console.log("here are just the definitions");
console.log(hello);
console.log(rainbow);
console.log(cat);