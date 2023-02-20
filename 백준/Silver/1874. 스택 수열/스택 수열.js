const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input[0];
let result = "";
let stack = [];
let count = 1;

for (let i = 1; i <= T; i++) {
  while (Number(input[i]) >= count) {
    stack.push(count++);
    result += "+\n";
  }
  const now = stack.pop();
  if (now != Number(input[i])) {
    result = "NO";
    break;
  } else {
    result += "-\n";
  }
}

console.log(result.trim());