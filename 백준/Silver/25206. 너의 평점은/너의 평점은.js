const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let totalCredit = 0;
let totalGrade = 0;

for (let i = 0; i < input.length; i++) {
  let tuple = input[i].split(" ");
  let credit = Number(tuple[1]);

  switch (tuple[2]) {
    case "A+":
      totalGrade += credit * 4.5;
      totalCredit += credit;
      break;
    case "A0":
      totalGrade += credit * 4.0;
      totalCredit += credit;
      break;
    case "B+":
      totalGrade += credit * 3.5;
      totalCredit += credit;
      break;
    case "B0":
      totalGrade += credit * 3.0;
      totalCredit += credit;
      break;
    case "C+":
      totalGrade += credit * 2.5;
      totalCredit += credit;
      break;
    case "C0":
      totalGrade += credit * 2.0;
      totalCredit += credit;
      break;
    case "D+":
      totalGrade += credit * 1.5;
      totalCredit += credit;
      break;
    case "D0":
      totalGrade += credit * 1.0;
      totalCredit += credit;
      break;
    case "F":
      totalGrade += 0;
      totalCredit += credit;
      break;
    default:
      totalGrade += 0;
      totalCredit += 0;
      break;
  }
}

console.log((totalGrade / totalCredit).toFixed(6));