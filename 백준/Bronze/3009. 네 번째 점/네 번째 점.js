const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arrX = [];
let arrY = [];

for (let i = 0; i < input.length; i++) {
  arrX.push(Number(input[i].split(" ")[0]));
  arrY.push(Number(input[i].split(" ")[1]));
}

arrX.sort();
arrY.sort();

let x = arrX[0] === arrX[1] ? arrX[2] : arrX[0];
let y = arrY[0] === arrY[1] ? arrY[2] : arrY[0];

console.log(`${x} ${y}`);