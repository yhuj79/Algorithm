const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

let stack = [];
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] >= "A" && input[i] <= "Z") {
    result += input[i];
  } else if (input[i] === "(") {
    stack.push(input[i]);
  } else if (input[i] === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      result += stack.pop();
    }
    stack.pop();
  } else if (input[i] === "+" || input[i] === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      result += stack.pop();
    }
    stack.push(input[i]);
  } else if (input[i] === "*" || input[i] === "/") {
    while (
      (stack.length && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      result += stack.pop();
    }
    stack.push(input[i]);
  }
}

while (stack.length) {
  result += stack.pop();
}

console.log(result);