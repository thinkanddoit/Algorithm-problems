const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const testNumber = Number(input.shift());
const arr = input[0].split(" ").map((x) => Number(x));
const stack = [0]; //초기항은 미리 넣어줌

for (let i = 1; i < testNumber; i++) {
  while (stack.length !== 0 && arr[stack[stack.length - 1]] < arr[i]) {
    arr[stack.pop()] = arr[i];
  }
  stack.push(i);
}
//forEach 가 while 보다 시간을 더 잡아먹는 것 같다. 아닌 것 같기도..

while (stack.length !== 0) {
  arr[stack.pop()] = -1;
}

console.log(arr.join(" "));
