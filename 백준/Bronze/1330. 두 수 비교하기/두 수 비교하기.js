let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

if (A > B) console.log(">");
if (A < B) console.log("<");
if (A == B) console.log("==");
