let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split(" ");

if (Number(input) >= 90) {
  console.log("A");
} else if (Number(input) >= 80) {
  console.log("B");
} else if (Number(input) >= 70) {
  console.log("C");
} else if (Number(input) >= 60) {
  console.log("D");
} else {
  console.log("F");
}