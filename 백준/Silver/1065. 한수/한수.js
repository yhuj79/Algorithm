const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let N = Number(input);
let count = 0;

for (let i = 1; i <= N; i++) {
  let str = String(i);

  if (i < 100) {
    count++;
  } else if (i >= 100 && i < 1000) {
    let a = Number(str[1]) - Number(str[0]);
    let b = Number(str[2]) - Number(str[1]);
    if (a === b) {
      count++;
    }
  }
}
console.log(count);
