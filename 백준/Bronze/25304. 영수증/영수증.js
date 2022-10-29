let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let sum = 0;
for (let i = 2; i <= Number(input[1]) + 1; i++) {
  let num = input[i].split(" ");
  sum += Number(num[0]) * Number(num[1]);
}
if (sum == input[0]) {
  console.log("Yes");
} else {
  console.log("No");
}
