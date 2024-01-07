const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let arr = input[i]
    .replace(/\r/g, "")
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if ((arr[0] === 0) & (arr[1] === 0) & (arr[2] === 0)) {
  } else if (arr[2] >= arr[0] + arr[1]) {
    console.log("Invalid");
  } else if (arr.every((i) => i === arr[0])) {
    console.log("Equilateral");
  } else if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
    console.log("Scalene");
  } else if (arr[0] ^ arr[1] ^ arr[2]) {
    console.log("Isosceles");
  } else if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
    console.log("Scalene");
  }
}