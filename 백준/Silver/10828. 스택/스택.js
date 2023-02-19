const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];
const stack = [];
const result = [];

for (let i = 1; i <= N; i++) {
  switch (input[i]) {
    case "pop":
      stack.length != 0 ? result.push(stack.pop()) : result.push(-1);
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      stack.length === 0 ? result.push(1) : result.push(0);
      break;

    case "top":
      stack.length != 0 ? result.push(stack.at(-1)) : result.push(-1);
      break;

    default:
      const num = input[i].split(" ");
      stack.push(num[1]);
      break;
  }
}

console.log(result.join("\n"));