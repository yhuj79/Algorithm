const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

let arr = [];

function Prime(n) {
  for (let i = 2; n > i; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

for (let j = M; j <= N; j++) {
  if (Prime(j)) {
    arr.push(j);
  }
}

if (arr.length === 0) console.log(-1);
else {
  console.log(arr.reduce((prev, cur) => prev + cur));
  console.log(Math.min(...arr));
}
