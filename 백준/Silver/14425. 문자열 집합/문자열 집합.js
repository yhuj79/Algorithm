const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const strs = input.slice(1, 1 + N);
const problems = input.slice(1 + N);

const solution = (N, M, strs, problems) => {
  const strMap = {};
  strs.forEach((str) => (strMap[str] = true));
  let count = 0;
  problems.forEach((p) => {
    if (strMap[p]) count += 1;
  });
  return count;
};

console.log(solution(N, M, strs, problems));