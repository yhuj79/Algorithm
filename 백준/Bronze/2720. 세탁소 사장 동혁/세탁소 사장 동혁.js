const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let change = Number(input[i]);

  let quarter = parseInt(change / 25);
  change -= quarter * 25;

  let dime = parseInt(change / 10);
  change -= dime * 10;

  let nickel = parseInt(change / 5);
  change -= nickel * 5;

  let penny = parseInt(change / 1);
  change -= penny * 1;

  console.log(`${quarter} ${dime} ${nickel} ${penny}`);
}