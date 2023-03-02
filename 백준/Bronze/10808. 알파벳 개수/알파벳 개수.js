const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  arr[input[i].charCodeAt() - 97]++;
}

console.log(arr.join(" "));