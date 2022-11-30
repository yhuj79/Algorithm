const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ");
let answer = "";

for (let i = 1; i <= Number(N); i++) {
  for (let j = 0; j < Number(M); j++) {
    answer +=
      Number(input[i].split(" ")[j]) +
      Number(input[Number(N) + i].split(" ")[j]) +
      " ";
  }
  answer += "\n";
}

console.log(answer.trim());