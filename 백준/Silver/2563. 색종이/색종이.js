const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const M = 100,
  N = 100;
let count = 0;

let arr = new Array(M).fill(false);
for (let i = 0; i < M; i++) {
  arr[i] = new Array(N).fill(false);
}

for (let i = 1; i <= input[0]; i++) {
  for (
    let j = Number(input[i].split(" ")[0]);
    j < Number(input[i].split(" ")[0]) + 10;
    j++
  ) {
    for (
      let k = Number(input[i].split(" ")[1]);
      k < Number(input[i].split(" ")[1]) + 10;
      k++
    ) {
      arr[j][k] = true;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j]) {
      count++;
    }
  }
}
console.log(count);