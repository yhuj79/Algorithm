const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let init = 0;
let sum = 0;
let isosceles = 0;

input.sort()

for (let i = 0; i < 3; i++) {
  sum += Number(input[i]);
  if (init == Number(input[i])) {
    isosceles += 1;
  }

  init = Number(input[i]);
}

if (sum == 180) {
  if (isosceles == 0) {
    console.log("Scalene");
  } else if (isosceles == 1) {
    console.log("Isosceles");
  } else if (isosceles == 2) {
    console.log("Equilateral");
  }
} else {
  console.log("Error");
}