var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = Number(inputs[0]);
var answer = [];
for(var i=1; i<=cases; i++){
    var x = Number(inputs[i].split(' ')[0]);
    var y = Number(inputs[i].split(' ')[1]);
    var common = gcd(x,y);
    answer.push((x*y) / common);
}

function gcd(a,b){
    var tmp;
    while(b != 0){
        tmp = a % b;
    	a = b;
        b = tmp;
    }
    return a;
}
console.log(answer.join('\n').trim());