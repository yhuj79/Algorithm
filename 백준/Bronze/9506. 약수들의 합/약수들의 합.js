const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let divisor = [];
  let sum = 0;
  let result = `${input[i]} = `;

  for (let j = 1; j <= Math.sqrt(input[i]); j++) {
    if (input[i] % j === 0) {
      divisor.push(j);
    }
  }

  for (let k = divisor.length - 1; k >= 0; k--) {
    divisor.push(input[i] / divisor[k]);
  }

  if (Number.isInteger(Math.sqrt(input[i]))) {
    divisor.splice(divisor.length / 2, 1);
  }

  for (let l = 0; l < divisor.length - 1; l++) {
    sum += divisor[l];
  }

  if (input[i] == sum) {
    for (let m = 0; m < divisor.length - 1; m++) {
      result += `${divisor[m]}`;
      if (m != divisor.length - 2) {
        result += " + ";
      }
    }
  } else {
    result = `${input[i]} is NOT perfect.`;
  }

  console.log(result);
}