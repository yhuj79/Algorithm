const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = "";
const N = Number(input.shift());
const arr = input.map(Number).sort((a, b) => a - b);

result += `${Math.round(arr.reduce((a, b) => a + b, 0) / N)}\n`;

result += `${arr[Math.floor(N / 2)]}\n`;

const map = new Map();
let max = 1;

for (let i of arr) {
  if (map.has(i)) {
    max = Math.max(max, map.get(i) + 1);
    map.set(i, map.get(i) + 1);
  } else map.set(i, 1);
}

const most = [];

for (let [key, val] of map) {
  if (val === max) most.push(key);
}

result += most.length === 1 ? `${most[0]}\n` : `${most[1]}\n`;

result += `${arr[N - 1] - arr[0]}`;

console.log(result);