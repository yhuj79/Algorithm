const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let number = Number(input[0]);
let base = Number(input[1]);
let answer = [];
let tmp = number;

while (tmp !== 0) {
  answer.push(tmp % base);
  tmp = Math.floor(tmp / base);
}

answer = answer.reverse();

for (let i = 0; i < answer.length; i++) {
  if (answer[i] >= 10 && answer[i] <= 35) {
    answer[i] = String.fromCharCode(answer[i] + 55);
  }
}

console.log(answer.join("").trim());