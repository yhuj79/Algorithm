const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

if (input[input.length - 1] === "") input.pop();
input.forEach((i) => {
  let result = "";
  [/[a-z]/g, /[A-Z]/g, /\d/g, /[ ]/g].forEach(
    (reg) => (result += i.match(reg) ? i.match(reg).length + " " : "0 ")
  );
  console.log(result.slice(0, result.length - 1));
});