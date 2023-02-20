const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let count = 0;
  for (let P of input[i]) {
    P === "(" ? count++ : count--;
    if (count < 0) {
      break;
    }
  }
  console.log(count === 0 ? "YES" : "NO");
}