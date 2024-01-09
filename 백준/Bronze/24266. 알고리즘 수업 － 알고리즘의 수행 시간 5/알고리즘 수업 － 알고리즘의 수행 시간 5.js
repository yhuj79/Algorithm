const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let num = BigInt(input);

console.log(`${num * num * num}`);
console.log(3);