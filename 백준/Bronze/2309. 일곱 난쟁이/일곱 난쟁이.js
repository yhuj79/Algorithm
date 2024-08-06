const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = input.reduce((acc, cur) => +acc + +cur);
let fakeDwarf = sum - 100;

for (i = 0; i < 8; i++) {
  let remainder = fakeDwarf - +input[i];

  for (j = 1; i + j < 9; j++) {
    if (remainder == +input[i + j]) {
      input.splice(i, 1);
      input.splice(i + j - 1, 1);
      return console.log(input.sort((a, b) => a - b).join("\n"));
    }
  }
}