const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const result =
  (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);

console.log(String(result));
console.log(3);