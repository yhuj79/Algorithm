let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const expression = input.shift();
const stack = [];
let result = 0;
let sh = new Map();

for (let i = 0; i < expression.length; i++) {
  let current = expression[i];

  if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90) {
    if (!sh.has(current)) {
      sh.set(current, input.shift());
    }
    stack.push(sh.get(current));
  } else {
    let second = Number(stack.pop());
    let first = Number(stack.pop());
    let tempResult = 0;

    switch (current) {
      case "+":
        tempResult = first + second;
        break;
      case "-":
        tempResult = first - second;
        break;
      case "/":
        tempResult = first / second;
        break;
      case "*":
        tempResult = first * second;
        break;
    }

    stack.push(tempResult);
  }
}

console.log(stack[0].toFixed(2));