const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("");

let result = "";

for (let i = 0; i < input.length; i++) {
  let char = input[i].charCodeAt(0);

  if (char >= 65 && char <= 90) {
    let upper = char + 13;
    if (upper > 90) {
      result += String.fromCharCode(upper - 26);
    } else {
      result += String.fromCharCode(upper);
    }
  } else if (char >= 97 && char <= 122) {
    let lower = char + 13;
    if (lower > 122) {
      result += String.fromCharCode(lower - 26);
    } else {
      result += String.fromCharCode(lower);
    }
  } else if (char === 32) {
    result += " ";
  } else {
    result += input[i];
  }
}

console.log(result);