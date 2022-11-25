const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);

for (let i = 2; i <= N; i++) {
  if (Number.isInteger(N / i)) {
    N = N / i;
    console.log(i);
    i = i - 1;
  } else if (N / i == 0) {
    break;
  }
}