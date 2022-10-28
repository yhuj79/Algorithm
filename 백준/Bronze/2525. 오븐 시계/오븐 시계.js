let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let current = input[0].split(" ");

let minute = Number(current[0]) * 60 + Number(current[1]) + Number(input[1]);

let H = Math.floor(minute / 60);
let M = minute - H * 60;
if (H >= 24) {
  H -= 24;
}

console.log(H, M);
