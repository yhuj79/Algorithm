let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let result = "";

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  result += `Case #${i}: ${Number(num[0]) + Number(num[1])}\n`;
}

console.log(result);