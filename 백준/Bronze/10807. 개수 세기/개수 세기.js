const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];
const v = input[2];

const arr = input[1].split(" ");
let count = 0;

for (let i = 0; i < N; i++) {
  if (v == arr[i]) {
    count++;
  }
}

console.log(count);
