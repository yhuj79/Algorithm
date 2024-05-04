const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

input.shift();

let arr = [];
let ans = 0;

for (let i = 0; i < input.length - 1; i++) {
  const dist = input[i + 1] - input[i];
  arr.push(dist);
}

function getGCD(num1, num2) {
  return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
}

let num = 0;

for (let i = 0; i < arr.length; i++) {
  num = getGCD(num, arr[i]);
}

arr.forEach((v) => {
  if (v > num) ans += v / num - 1;
});

console.log(ans);