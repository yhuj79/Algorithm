const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(
  input.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
    if (match.startsWith("<")) {
      return match;
    }
    return [...match].reverse().join("");
  })
);