const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim();

const n = parseInt(input);

var result = 0;

for (i = 1; i * i <= n; i++) {
  result++;
}

console.log(result);