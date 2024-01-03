const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];

let arrX = [];
let arrY = [];

for (let i = 1; i <= N; i++) {
  arrX.push(Number(input[i].split(" ")[0]));
  arrY.push(Number(input[i].split(" ")[1]));
}

console.log(
  (Math.max(...arrX) - Math.min(...arrX)) *
    (Math.max(...arrY) - Math.min(...arrY))
);