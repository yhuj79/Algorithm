const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ");

let count = 0;

function Prime(n) {
  for (let i = 2; n > i; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

for (let j = 0; j < N; j++) {
  if (Prime(Number(num[j]))) {
    count++;
  }
}

console.log(count);