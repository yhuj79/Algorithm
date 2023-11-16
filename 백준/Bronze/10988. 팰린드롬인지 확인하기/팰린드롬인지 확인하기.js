const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

if (input.join("") == input.reverse().join("")) {
  console.log(1);
} else {
  console.log(0);
}