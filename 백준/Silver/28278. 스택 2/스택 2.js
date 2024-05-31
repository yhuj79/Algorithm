const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift()
const result = []
const stack = []
input.forEach((line) => {
    // 입력
    if(line.length !== 1) {
        const target = line.split(" ")[1]
        const targetNum = Number(target)
        stack.push(targetNum)
    } else {
        const num = Number(line)
        if(num === 2) {
            if(stack.length) {
                result.push(stack.pop())
            } else {
                result.push(-1)
            }
        } else if(num === 3) {
            result.push(stack.length)
        } else if(num === 4) {
            if(stack.length) {
                result.push(0)
            } else {
                result.push(1)
            }
        } else if(num === 5) {
            if(stack.length) {
                result.push(stack.at(-1))
            } else {
                result.push(-1)
            }
        }
    }
})

console.log(result.join("\n"))