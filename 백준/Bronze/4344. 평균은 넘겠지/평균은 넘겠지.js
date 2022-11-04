const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const C = input[0];

for (let i = 1; i <= C; i++) {
  let arr = input[i].split(" ");
  let N = arr[0];
  let total = mean = greatStudent = 0;

  for (let j = 1; j < arr.length; j++) {
    total += Number(arr[j]);
    mean = total / N;
  }
  for (let k = 1; k < arr.length; k++) {
    if (arr[k] > mean) {
      greatStudent++;
    }
  }
  console.log(`${((greatStudent / N) * 100).toFixed(3)}%`);
}
