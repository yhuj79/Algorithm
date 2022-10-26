function solution(input1, input2) {
    console.log(input1);
    console.log(input2);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    let list1 = input[0].split(' ').map((el) => parseInt(el));
    let list2 = input[1].split(' ').map((el) => parseInt(el));
    solution(list1, list2);
    process.exit();
});