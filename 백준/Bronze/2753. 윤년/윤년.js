let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split(" ");

if (Number(input) % 4 === 0 && !(Number(input) % 100 === 0)) {
  console.log("1");
} else if (Number(input) % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}