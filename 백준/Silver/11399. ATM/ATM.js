const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let sum = 0;
let result = 0;

arr.forEach((e) => {
  sum += e;
  result += sum;
});

console.log(result);