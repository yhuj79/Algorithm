let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const T = input[0];
const arr = [];
let line = 0;

for (let i = 1; i <= T; i++) {
  line = input[i].split(" ");
  arr.push(...line);
}

for (let j = 0; j < T * 2; j++) {
  console.log(Number(arr[j]) + Number(arr[j + 1]));
  j++;
}
