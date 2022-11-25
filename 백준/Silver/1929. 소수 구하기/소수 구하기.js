const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

var M = Number(input[0]);
var N = Number(input[1]);
var arr = [];
var result = "";

for (var i = 0; i <= N; i++) {
  arr.push(true);
}
arr[0] = false;
arr[1] = false;

for (var m = 2; m <= N; m++) {
  for (var n = 2; n <= N / m; n++) {
    arr[m * n] = false;
  }
}

for (var j = M; j <= N; j++) {
  if (arr[j]) result += j + "\n";
}

console.log(result.trim());