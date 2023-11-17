const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let char = input[0].split("").reverse();
let base = Number(input[1]);
let result = 0;
for (let i = 0; i < char.length; i++) {
  if (char[i] >= "A" && char[i] <= "Z") {
    char[i] = char[i].charCodeAt(0) - 55;
    result += char[i] * Math.pow(base, i);
  } else {
    char[i] = Number(char[i]);
    result += char[i] * Math.pow(base, i);
  }
}
console.log(result);
