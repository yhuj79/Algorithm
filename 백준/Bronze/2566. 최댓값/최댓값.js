const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let MAX = 0;
let N = 1;
let M = 1;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (Number(input[i].split(" ")[j]) > MAX) {
      MAX = Number(input[i].split(" ")[j]);
      N = i + 1;
      M = j + 1;
    }
  }
}
console.log(MAX);
console.log(`${N} ${M}`);