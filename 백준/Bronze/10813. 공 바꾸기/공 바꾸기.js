const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((el) => +el);

let arr = new Array(N);

for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

for (let i = 1; i <= M; i++) {
  let req = input[i].split(" ").map((el) => +el - 1);
  [arr[req[0]], arr[req[1]]] = [arr[req[1]], arr[req[0]]];
}

console.log(arr.join(" ").trim());