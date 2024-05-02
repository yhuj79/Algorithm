const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [constA, constB] = fs.readFileSync(filePath).toString().split(" ").map(Number);

let A = constA;
let B = constB;
let C = 0;

if (A < B) {
  let tmp = A;
  A = B;
  B = tmp;
}

while (1) {
  C = A % B;

  if (C === 0) {
    console.log((constA * constB) / B);
    break;
  } else {
    A = B;
    B = C;
  }
}
