let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split(' ');

console.log(parseInt(input[0]) + parseInt(input[1]));
console.log(parseInt(input[0]) - parseInt(input[1]));
console.log(parseInt(input[0]) * parseInt(input[1]));
console.log(Math.floor(parseInt(input[0]) / parseInt(input[1])));
console.log(parseInt(input[0]) % parseInt(input[1]));