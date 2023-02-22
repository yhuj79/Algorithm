const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = input[0];
let A = input[1].split(" ").map(Number);
let stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length && A[stack[stack.length - 1]] < A[i]) {
    A[stack.pop()] = A[i];
  }
  stack.push(i);
}

while (stack.length) {
  A[stack.pop()] = -1;
}

console.log(A.join(" ").trim());