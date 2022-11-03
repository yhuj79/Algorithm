const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((n) => +n);
const result = [];

for (let i = 0; i <= arr.length - 1; i++) {
  result.push(arr[i] % 42);
}

console.log(new Set(result).size);
