const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];

for (let i = 1; i <= N; i++) {
  let arr = input[i].split("");
  let point = 0;
  let total = 0;

  for (let j = 0; j <= arr.length; j++) {
    if (arr[j] == "O") {
      point++;
      total += point;
    } else if (arr[j] == "X") {
      point = 0;
    }
  }
  console.log(total);
}
