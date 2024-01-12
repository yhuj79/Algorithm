const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

let max = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i == j || i == k || j == k) {
        continue;
      } else {
        sum = arr[i] + arr[j] + arr[k];

        if (sum <= M && sum > max) {
          max = sum;
        }
      }
    }
  }
}

console.log(max);