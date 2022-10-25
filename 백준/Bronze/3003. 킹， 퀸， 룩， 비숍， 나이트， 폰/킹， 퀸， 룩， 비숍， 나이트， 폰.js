let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split(" ");

console.log(
  1 - input[0],
  1 - input[1],
  2 - input[2],
  2 - input[3],
  2 - input[4],
  8 - input[5]
);