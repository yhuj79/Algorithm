const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const X = input[1].split(" ");
const result = [];

const set = new Set(X.sort((a, b) => a - b));
const map = new Map();

[...set].forEach((item, index) => {
  map.set(item, index);
});

const arr = input[1].split(" ");
arr.forEach((item, index) => {
  result.push(map.get(item));
});

console.log(result.join(" "));