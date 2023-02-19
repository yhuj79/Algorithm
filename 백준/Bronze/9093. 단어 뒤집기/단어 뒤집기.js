const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input[0];
let result = "";

for (let i = 1; i <= T; i++) {
  const w = input[i].split(" ");
  for (let j = 0; j < w.length; j++) {
    result += w[j].split("").reverse().join("") + " ";
  }
  result += "\n";
}

console.log(result.trim());