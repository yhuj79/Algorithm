let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [N, K] = input.shift().split(" ").map(Number);
let arr = input.map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;

  arr.forEach((m) => {
    let piece = parseInt(m / mid);
    if (piece >= 1) {
      sum += piece;
    }
  });

  if (sum >= K) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);