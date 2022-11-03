const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = input.map((n) => +n);

for (let i = 1; i <= 30; i++) {
  if(arr.indexOf(i) == -1) {
    console.log(i);
  }
}
