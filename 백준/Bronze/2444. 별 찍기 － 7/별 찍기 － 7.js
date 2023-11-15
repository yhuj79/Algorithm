const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let MAX = 1;

for (let i = 1; i < Number(input); i++) {
  MAX += 2;
}

let emptyCount = parseInt(MAX / 2);
let starCount = 1;

while (emptyCount >= 0) {
  console.log(
    `${" ".repeat(emptyCount)}${"*".repeat(starCount)}`
  );
  emptyCount -= 1;
  starCount += 2;
}

emptyCount = 1;
starCount = MAX - 2;

while (starCount >= 0) {
  console.log(
    `${" ".repeat(emptyCount)}${"*".repeat(starCount)}`
  );
  emptyCount += 1;
  starCount -= 2;
}