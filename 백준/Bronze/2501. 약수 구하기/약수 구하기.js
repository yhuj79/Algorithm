const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map((el) => +el);

let divisor = [];

for (let i = 1; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    divisor.push(i);
  }
}

for (let j = divisor.length - 1; j >= 0; j--) {
  divisor.push(N / divisor[j]);
}

if (Number.isInteger(Math.sqrt(N))) {
  divisor.splice(divisor.length / 2, 1);
}

if (divisor[K - 1]) {
  console.log(divisor[K - 1]);
} else {
  console.log(0);
}