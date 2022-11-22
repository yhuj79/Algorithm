const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let data = input[i].split(" ");
  let H = Number(data[0]);
  let W = Number(data[1]);
  let N = Number(data[2]);

  if (N % H === 0) {
    x = H;
    y = N / H;
  } else if (N % H !== 0) {
    x = N % H;
    y = Math.ceil(N / H);
  }
  if (y < 10) {
    y = `0${y}`;
  }
  console.log(`${x}${y}`);
}
