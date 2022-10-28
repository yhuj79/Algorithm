let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim();

let sum = 0;

for (let i = 1; i <= input; i++) {
  sum += i;
}

console.log(sum);
