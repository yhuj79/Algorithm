const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];
const deque = [];
const result = [];

for (let i = 1; i <= N; i++) {
  switch (input[i]) {
    case "pop_front":
      deque.length != 0 ? result.push(deque.shift()) : result.push(-1);
      break;

    case "pop_back":
      deque.length != 0 ? result.push(deque.pop()) : result.push(-1);
      break;

    case "size":
      result.push(deque.length);
      break;

    case "empty":
      deque.length === 0 ? result.push(1) : result.push(0);
      break;

    case "front":
      deque.length != 0 ? result.push(deque[0]) : result.push(-1);
      break;

    case "back":
      deque.length != 0 ? result.push(deque.at(-1)) : result.push(-1);
      break;

    default:
      const cmd = input[i].split(" ");
      if (cmd[0] == "push_front") {
        deque.unshift(cmd[1]);
        break;
      } else {
        deque.push(cmd[1]);
        break;
      }
  }
}

console.log(result.join("\n"));