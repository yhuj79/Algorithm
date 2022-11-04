const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
let num = input[1].split("");
let count = 0;

for (let i = 0; i < N; i++) {
  count += Number(num[i]);
}
console.log(count);
