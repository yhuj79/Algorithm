const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).map(Number);

let cnt = 0;
for (let i = 1; i <= input; i *= 10) {
    cnt += input - i + 1;
}

console.log(cnt);