const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function fibonacci(input) {
  if (input == 0) return 0;
  else if (input == 1) return 1;
  else return fibonacci(input - 1) + fibonacci(input - 2);
}
console.log(fibonacci(input));