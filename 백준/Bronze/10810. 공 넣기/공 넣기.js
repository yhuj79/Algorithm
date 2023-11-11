const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

let arr = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  let req = input[i].split(" ");
  for (let j = req[0]; j <= Number(req[1]); j++) {
    arr[j - 1] = Number(req[2]);
  }
}

console.log(arr.join(" ").trim());