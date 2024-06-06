const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const K = input.shift();
const sumArr = [];
let sum = 0;

for (let i = 1; i <= K; i++) {
  if (input[i - 1] === 0) {
    sumArr.pop();
  } else {
    sumArr.push(input[i - 1]);
  }
}

for (let i = 0; i < sumArr.length; i++) {
  sum = sum + sumArr[i];
}

console.log(sum);