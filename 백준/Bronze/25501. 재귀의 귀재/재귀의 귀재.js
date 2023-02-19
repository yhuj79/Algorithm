const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let result = "";

function recursion(char, firstNum, lastNum) {
  if (lastNum <= firstNum) return `1 ${firstNum + 1}\n`;
  else if (char[lastNum] != char[firstNum]) return `0 ${firstNum + 1}\n`;
  else return recursion(char, firstNum + 1, lastNum - 1);
}

function isPalindrome(char) {
  return recursion(char, 0, char.length - 1);
}

function splitStr(str) {
  const strArr = str.split("\n");

  for (let i = 1; i <= strArr[0]; i++) {
    result += isPalindrome(strArr[i]);
  }
}

splitStr(input);
console.log(result.trim());