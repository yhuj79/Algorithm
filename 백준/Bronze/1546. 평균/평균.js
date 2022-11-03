const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const arr = input[1].split(" ").map((el) => +el);

const M = Math.max(...arr);
const average = arr.reduce((p, c) => p + c, 0) / arr.length;

console.log(average/M*100);