const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input);

let result = 0;

for (let i = 1; i <= N; i++) {
  let sum = 0;
  let str = i.toString();

  for (let j = 0; j < str.length; j++) {
    sum += Number(str[j]);
  }
  sum += i;
  if (sum == N) {
    result = i;
    break;
  }
}

console.log(result);