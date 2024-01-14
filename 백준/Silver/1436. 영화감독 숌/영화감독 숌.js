const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
let num = 1;
let count = 0;

function CheckNumber(str) {
  const regex = /666/;
  return regex.test(str);
}

for (let i = 0; i < N; i++) {
  while (1) {
    if (CheckNumber(num.toString())) {
      count++;
      num++;
      break;
    } else {
      num++;
    }
  }
}

console.log(num - 1);