const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let count = 0;

for (let i = 0; i < input.length; i++) {
  let n = Number(input[i].charCodeAt(0));
  switch (true) {
    case n >= 65 && n < 68:
      count += 3; break; // ABC
    case n >= 68 && n < 71:
      count += 4; break; // DEF
    case n >= 71 && n < 74:
      count += 5; break; // GHI
    case n >= 74 && n < 77:
      count += 6; break; // JKL
    case n >= 77 && n < 80:
      count += 7; break; // MNO
    case n >= 80 && n < 84:
      count += 8; break; // PQRS
    case n >= 84 && n < 87:
      count += 9; break; // TUV
    case n >= 87 && n < 91:
      count += 10; break; // WXYZ
    default:
  }
}
console.log(count);
