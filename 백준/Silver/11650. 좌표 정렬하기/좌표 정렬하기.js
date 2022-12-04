const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let arr = input.map((i) => i.split(" ").map(Number));
let result = "";

arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

for (let i = 0; i < arr.length; i++) {
  result += `${arr[i][0]} ${arr[i][1]}\n`;
}

console.log(result.trim());