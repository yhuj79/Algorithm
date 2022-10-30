let fs = require("fs");
let input = Number(fs.readFileSync("dev/stdin").toString());

let num = input;
let sum = 0;
let count = 0;

while (true) {
  count++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(count);
