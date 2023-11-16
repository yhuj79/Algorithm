const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = "";

for (let j = 0; j < 15; j++) {
  for (let i = 0; i < input.length; i++) {
    if (input[i][j]) {
      str += input[i][j];
    }
  }
}

console.log(str);