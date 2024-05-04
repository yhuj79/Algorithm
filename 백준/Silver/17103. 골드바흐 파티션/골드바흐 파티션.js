var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var result = [];
var size = Math.max(...inputs);
var arr = [];
for(var i=0; i<size; i++){
    arr.push(true);
}
arr[0] = false;
arr[1] = false;

for(var m=2; m<=size/2; m++){
    if(arr[m]){
        for(var n=2; n<=size/m; n++){
				arr[m*n] = false;
			}
    }
}

for(var k=1; k<inputs.length; k++){
    var splited = Number(inputs[k]);
    var count = 0;
    for (var n=1; n<=splited/2; n++){
        if(arr[splited-n] && arr[n]){
            count++;
        }
    }
    result.push(count);
}
console.log(result.join('\n').trim());