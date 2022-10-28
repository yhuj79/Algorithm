let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let H = 0;
let M = 0;

if (parseInt(input[1]) > 44) {
  H = parseInt(input[0]);
  M = parseInt(input[1]) - 45;
} else {
  if (parseInt(input[0]) === 0) {
    H = 23;
  } else {
    H = parseInt(input[0]) - 1;
  }
  M = 60 + (parseInt(input[1]) - 45);
}

console.log(H, M);