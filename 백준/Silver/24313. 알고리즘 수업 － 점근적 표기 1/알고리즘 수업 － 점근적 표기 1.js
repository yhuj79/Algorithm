const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[2]);
const [a1, a0] = input[0].split(" ").map((a) => Number(a));
const fnSum = a1 * n + a0;
const g = Number(input[1]);
const gn = g * n;

if (a0 <= (g - a1) * n && g >= a1) {
  console.log(1);
} else {
  console.log(0);
}