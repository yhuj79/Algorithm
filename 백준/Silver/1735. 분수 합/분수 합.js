const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function calculate(type, constA, constB) {
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
      if (type == "gcm") {
        return B;
      } else {
        return (constA * constB) / B;
      }
      break;
    } else {
      A = B;
      B = C;
    }
  }
}

const [numerA, denomA] = input[0].split(" ").map(Number);
const [numerB, denomB] = input[1].split(" ").map(Number);

const lcm = calculate("lcm", denomA, denomB);

let resultNumer = numerA * (lcm / denomA) + numerB * (lcm / denomB);

const gcm = calculate("gcm", resultNumer, lcm);

console.log(`${resultNumer / gcm} ${lcm / gcm}`);
