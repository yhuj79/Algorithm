const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => {
  return a - b;
});

console.log(arr.join("\n").trim());