const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [num, key] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}
let target = 0;
let answer = [];
while (arr.length > 0) {
  target += key - 1;
  target %= arr.length;
  answer.push(arr.splice(target, 1));
}

console.log("<" + answer.join(", ") + ">");

//splice 함수에 대해 머릿속에 집어 넣자
//집중 !
