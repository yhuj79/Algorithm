let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

for (let i = 0; i <= input.length; i++) {
  let num = input[i].split(" ");

  if (Number(num[0]) == 0 && Number(num[1]) == 0) {
    break;
  }
  
  console.log(Number(num[0]) + Number(num[1]));
}
