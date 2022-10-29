let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim();
let line = "";

for (let i = 1; i <= Number(input); i++) {
  line += "*";
  console.log(" ".repeat(Number(input) - i) + line);
}