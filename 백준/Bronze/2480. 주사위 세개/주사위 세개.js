let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else if (a === b && a != c) {
  console.log(1000 + a * 100);
} else if (a != b && b === c) {
  console.log(1000 + b * 100);
} else if (a === c && a != b) {
  console.log(1000 + a * 100);
} else {
  if (a > b && a > c) {
    console.log(a * 100);
  } else if (a > c && a > b) {
    console.log(a * 100);
  } else if (b > a && b > c) {
    console.log(b * 100);
  } else if (b > c && b > a) {
    console.log(b * 100);
  } else if (c > a && c > b) {
    console.log(c * 100);
  } else if (c > b && c > a) {
    console.log(c * 100);
  }
}
