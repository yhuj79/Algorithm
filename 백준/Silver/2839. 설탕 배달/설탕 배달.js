const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  }
    
  if (0 > N) {
    console.log(-1);
    break;
  }

  count++;
  N -= 3;
}