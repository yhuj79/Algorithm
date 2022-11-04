const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const arr = [];

for (let i = 97; i <= 122; i++) {
  arr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(arr.join(" "));
