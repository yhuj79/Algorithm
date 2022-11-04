const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let str = input[i].split(" ");
  let R = str[0];
  let S = str[1];
  let P = "";

  for (let j = 0; j < S.length; j++) {
    for (let k = 1; k <= R; k++) {
      P += String(S[j]);
    }
  }
  console.log(P);
}
