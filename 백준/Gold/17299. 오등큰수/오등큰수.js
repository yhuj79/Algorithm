const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let arr = input[1].split(" ");
let count = {};
let stack = [];
let result = [];

for (let i in arr) {
  if (!count[arr[i]]) {
    count[arr[i]] = 1;
  } else {
    count[arr[i]]++;
  }
}

for (let j = 0; j < N; j++) {
  while (
    stack.length !== 0 &&
    count[arr[j]] > count[arr[stack[stack.length - 1]]]
  ) {
    result[stack.pop()] = arr[j];
  }
  stack.push(j);
}

while (stack.length !== 0) {
  result[stack.pop()] = -1;
}

console.log(result.join(" ").trim());