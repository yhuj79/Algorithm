const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

const N = input.shift();

for (let j = 0; j < N; j++) {
  while (1) {
    if (isPrime(input[j])) {
      console.log(input[j]);
      break;
    } else {
      input[j]++;
    }
  }
}