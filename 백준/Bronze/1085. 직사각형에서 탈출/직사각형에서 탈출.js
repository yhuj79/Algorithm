const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const arr = [];

arr.push(input[3] - input[1]);
arr.push(Number(input[1]));
arr.push(input[2] - input[0]);
arr.push(Number(input[0]));

console.log(Math.min(...arr));