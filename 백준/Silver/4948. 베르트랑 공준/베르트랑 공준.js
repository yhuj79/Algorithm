const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let M = Number(input[i]);
  let N = Number(input[i]) * 2;
  let arr = [];
  let result = [];

  for (let k = 0; k <= N; k++) {
    arr.push(true);
  }
  arr[0] = false;
  arr[1] = false;

  for (let m = 2; m <= N; m++) {
    for (let n = 2; n <= N / m; n++) {
      arr[m * n] = false;
    }
  }

  for (let j = M + 1; j <= N; j++) {
    if (arr[j]) result.push(j);
  }

  if (M == 0) {
    break;
  } else {
    console.log(result.length);
  }
}
