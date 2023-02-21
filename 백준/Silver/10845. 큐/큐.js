const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];
const queue = [];
const result = [];

for (let i = 1; i <= N; i++) {
  switch (input[i]) {
    case "pop":
      queue.length != 0 ? result.push(queue.shift()) : result.push(-1);
      break;

    case "size":
      result.push(queue.length);
      break;

    case "empty":
      queue.length === 0 ? result.push(1) : result.push(0);
      break;

    case "front":
      queue.length != 0 ? result.push(queue[0]) : result.push(-1);
      break;

    case "back":
      queue.length != 0 ? result.push(queue.at(-1)) : result.push(-1);
      break;

    default:
      const num = input[i].split(" ");
      queue.push(num[1]);
      break;
  }
}

console.log(result.join("\n"));