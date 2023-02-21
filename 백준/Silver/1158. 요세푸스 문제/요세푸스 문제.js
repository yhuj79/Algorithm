const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let arr = [];
let result = [];
const N = Number(input[0]);

for (let i = 1; i <= input[0]; i++) {
  arr.push(i);
}

while (true) {
  for (let j = 1; j < input[1]; j++) {
    arr.push(arr.shift());
  }
  result.push(arr.shift());

  if (result.length === N) {
    break;
  }
}

console.log(`<${result.join(", ")}>`);