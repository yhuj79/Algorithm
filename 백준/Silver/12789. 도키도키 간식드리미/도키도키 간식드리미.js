const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const line = input[1].split(" ").map(Number);
const stack = [];
let cur = 1;
let i = 0;

while (i < +input[0]) {
  if (line[i] === cur) {
    cur++;
    i++;
  } else {
    if (stack.length > 0 && stack.at(-1) === cur) {
      stack.pop();
      cur++;
    } else {
      stack.push(line[i]);
      i++;
    }
  }
}

for (let i = stack.length - 1; i >= 0; i--) {
  if (stack[i] === cur) {
    stack.pop();
    cur++;
  }
}

console.log(stack.length > 0 ? "Sad" : "Nice");