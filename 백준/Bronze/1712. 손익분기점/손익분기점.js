const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let N = A / (C - B);

let result = Math.floor(N) + 1;

B >= C ? (result = -1) : result;

console.log(result);