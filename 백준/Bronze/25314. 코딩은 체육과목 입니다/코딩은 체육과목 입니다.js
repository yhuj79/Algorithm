const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let result = "";

for (let i = 0; i < Number(input) / 4; i++) {
  result += "long ";
}

console.log(result + "int");