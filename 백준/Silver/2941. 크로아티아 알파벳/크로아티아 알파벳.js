const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const regex = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

regex.map((el) => (input = input.replace(el, "1")));
console.log(input.length);
