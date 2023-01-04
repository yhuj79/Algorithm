const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
let arr = [];
let result = "";

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => parseInt(a) - parseInt(b));

for (let i = 0; i < arr.length; i++) {
  result += `${arr[i]}\n`;
}

console.log(result.trim());