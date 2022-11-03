const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0].split(" ").map((el) => +el);
const A = input[1].split(" ").map((el) => +el);

const MAX = Math.max(...A);
const MIN = Math.min(...A);

console.log(`${MIN} ${MAX}`);