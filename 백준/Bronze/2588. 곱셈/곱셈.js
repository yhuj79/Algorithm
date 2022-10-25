let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

console.log(input[0] * input[1].substr(2, 1));
console.log(input[0] * input[1].substr(1, 1));
console.log(input[0] * input[1].substr(0, 1));
console.log(input[0] * input[1]);