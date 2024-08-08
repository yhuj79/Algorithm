let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

let sum = 0;
let count = 0;

while (sum <= Number(input)) {
  count++;
  sum += count;
}

console.log(count - 1);