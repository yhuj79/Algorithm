const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const NX = input[0].split(" ").map((el) => +el);
const A = input[1].split(" ").map((el) => +el);

const N = NX[0];
const X = NX[1];
const answer = [];

for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    answer.push(A[i]);
  }
}

console.log(answer.join(" "));