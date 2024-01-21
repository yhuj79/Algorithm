const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cardList = input[1].split(" ").map(Number);
const req = input[3].split(" ").map(Number);

const map = new Map();
const result = [];

cardList.forEach((v) => {
  if (map.has(v)) {
    map.set(v, map.get(v) + 1);
  } else {
    map.set(v, 1);
  }
});

req.forEach((v) => {
  result.push(map.get(v) || 0);
});

console.log(result.join(" "));