let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if (a == b || b == c || a == c) {
  if (a == b) {
    console.log(1000 + a * 100);
  } else {
    console.log(1000 + c * 100);
  }
} else {
  console.log(Math.max(a, b, c) * 100);
}
