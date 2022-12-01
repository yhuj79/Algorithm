const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, k] = input[0].split(" ");
let x = input[1].split(" ");
let arr = [];

for (let i = 0; i < x.length; i++) {
  arr.push(Number(x[i]));
}

arr.sort((a, b) => {
  return b - a;
});

console.log(arr[k - 1]);