const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let left = input[0].split("");
let right = [];
let M = Number(input[1]);

for (let i = 2; i < 2 + M; i++) {
  let [cmd, value] = input[i].split(" ");
  if (cmd === "L" && left.length) right.push(left.pop());
  else if (cmd === "D" && right.length) left.push(right.pop());
  else if (cmd === "B") left.pop();
  else if (cmd === "P") left.push(value);
}

let result = left.join("");
result += right.reverse().join("");
console.log(result);