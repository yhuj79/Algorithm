const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = +input[0];
const k = +input[1];
let answer = [];

const arr = Array.from({ length: n }, (v, i) => i + 1);
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    if (j === k) {
      answer.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
}

console.log("<" + answer.join(", ") + ">");