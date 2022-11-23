const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
let arr = Array.from(Array(15), () => new Array(15));
let result = "";

for (let i = 1; i <= T; i++) {
  let k = Number(input.shift()); // 층
  let n = Number(input.shift()); // 호

  for (let i = 0; i < 15; i++) {
    arr[i][1] = 1;
    arr[0][i] = i;
  }

  for (let i = 1; i < 15; i++) {
    for (let j = 2; j < 15; j++) {
      arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
    }
  }

  result += `${arr[k][n]}\n`;
}
console.log(result);
