let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = input[0].split(" ").map(Number);
let M = input[1].split(" ").map(Number);

let start = 1;
let end = M.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;
  M.forEach((m) => {
    if (m > mid) {
      sum += m - mid;
    }
  });
  if (sum >= N[1]) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);