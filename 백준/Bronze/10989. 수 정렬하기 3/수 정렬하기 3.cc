#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);


    int N;
    cin >> N;

    int input[10001]={0};

    for(int i=0;i<N;i++) {
        int in;
        cin >> in;
        input[in]+=1;
    }

    for (int i=1; i<10001;i++) {
        for (int j=0; j<input[i];j++) {
            cout << i << '\n';
        }
    }

}

// node.js로 풀 수 없음

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let N = input[0];
// let arr = [];

// for (let i = 1; i <= N; i++) {
//   arr.push(Number(input[i]));
// }

// arr.sort((a, b) => {
//   return a - b;
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }