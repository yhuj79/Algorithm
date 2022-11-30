const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;
let arr = [];

for (let i = 0; i < input.length; i++) {
  sum += Number(input[i]);
  arr.push(Number(input[i]));
}

arr.sort((a, b) => {
  return a - b;
});

console.log(sum / input.length);
console.log(arr[2]);