const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const log = new Set();

for (let i = 1; i <= n; i++) {
  let [name, access] = input[i].split(" ");
  if (access == "enter") {
    log.add(name);
  } else {
    log.delete(name);
  }
}

let result = [...log].sort();
result.reverse();

console.log(result.join("\n"));