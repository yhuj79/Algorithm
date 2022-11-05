const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);

let D = 0;

D = (V - B) / (A - B);

console.log(Math.ceil(D));