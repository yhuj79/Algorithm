const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const toStrNum = new Map();
const toNumStr = new Map();

for (let i = 1; i <= N; i++) {
  toStrNum.set(input[i], i);
  toNumStr.set(i, input[i]);
}

for (let j = N + 1; j <= N + M; j++) {
  if (Number(input[j]).toString() == "NaN") {
    console.log(toStrNum.get(input[j]));
  } else {
    console.log(toNumStr.get(Number(input[j])));
  }
}