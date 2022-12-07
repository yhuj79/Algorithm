const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
let arr = [];
let result = "";

for (let i = 1; i <= N; i++) {
  arr.push([input[i], input[i].length]);
}

arr.sort();

arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 0; i < arr.length; i++) {
  if (i > 0 && arr[i - 1][0] == arr[i][0]) {
    continue;
  } else {
    result += `${arr[i][0]}\n`;
  }
}

console.log(result.trim());