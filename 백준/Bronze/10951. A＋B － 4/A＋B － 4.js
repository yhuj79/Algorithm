let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

for (let i = 0; i <= input.length - 1; i++) {
  let num = input[i].split(" ");
  console.log(Number(num[0]) + Number(num[1]));
}
