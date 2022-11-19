const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

let value = 1;
while (true) {
  input -= value;
  if (input <= 0) {
    input += value;
    break;
  }
  value++;
}

if (value % 2 === 1) {
  console.log(`${value - (input - 1)}/${1 + (input - 1)}`);
} else {
  console.log(`${1 + (input - 1)}/${value - (input - 1)}`);
}
