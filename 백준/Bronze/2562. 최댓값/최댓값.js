const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = input.map((n) => +n);
const MAX = Math.max(...arr);

console.log(MAX);
console.log(arr.indexOf(MAX) + 1);
