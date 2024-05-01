const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const str = new Set();

for (let i = 0; i <= input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    str.add(input.slice(i, j));
  }
}
console.log(str.size);
