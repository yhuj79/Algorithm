const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const setA = new Set();
const setB = new Set();

const result = [];

input.forEach((e, idx) => {
  if (idx < N) {
    setA.add(e);
  } else {
    setB.add(e);
  }
});

setA.forEach((e) => {
  if (setB.has(e)) {
    result.push(e);
  }
});

result.sort();

console.log(result.length);
console.log(result.join("\n"));
