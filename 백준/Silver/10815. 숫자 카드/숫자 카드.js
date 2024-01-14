const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, init, M, check] = fs.readFileSync(filePath).toString().trim().split("\n");

const setInit = new Set(init.split(" ").map(Number));
const arrCheck = check.split(" ").map(Number);
let result = [];

for (let i = 0; i < arrCheck.length; i++) {
  if (setInit.has(arrCheck[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));