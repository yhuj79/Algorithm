const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

const n = input.map(Number);

const result = 2 ** n;

console.log(result);