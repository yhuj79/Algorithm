let arr = [];

function d(n) {
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }
  return sum + parseInt(n);
}

for (let n = 1; n <= 10000; n++) {
  arr.push(d(n));
}

for (let j = 1; j < arr.length + 1; j++) {
  if (arr.indexOf(j) == -1) {
    console.log(j);
  }
}