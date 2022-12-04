const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => {
  return b - a;
});

console.log(arr.join(""));