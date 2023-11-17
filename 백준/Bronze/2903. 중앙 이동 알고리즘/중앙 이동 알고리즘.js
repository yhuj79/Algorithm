const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let init = 2;
let col = 0;

for (let i = 0; i < Number(input); i++) {
  init = init * 2 - 1;
}

console.log(init * init);