const fs = require('fs');

let [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input = input.map(Number);

const occation = [0];

occation[1] = 1;
occation[2] = 2;
occation[3] = 4;

for (let i = 4; i <= Math.max(...input); i++) {
  occation[i] = occation[i - 3] + occation[i - 2] + occation[i - 1];
}

input.forEach((v) => {
  console.log(occation[v]);
});