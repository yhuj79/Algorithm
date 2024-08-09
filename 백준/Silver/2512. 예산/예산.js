let fs = require("fs");
let [N, input, M] = fs.readFileSync("dev/stdin").toString().split("\n");

let arr = input.split(" ").map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;

  arr.forEach((m) => {
    sum += Math.min(mid, m);
  });

  if (sum <= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);