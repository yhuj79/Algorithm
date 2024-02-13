const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let arr = input[0].split(" ").map(item => Number(item));

let uniq = [...new Set([...arr])];
let object = {};

uniq.sort(function(a, b){
    return b-a;
})

for(let i=0; i<uniq.length; i++){
    object[uniq[i]] = uniq.length - i - 1;
}

let str = "";

arr.forEach((item) => {
    str += object[item] + " ";
});
console.log(str);