const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim();

const stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (isOpenBracket(input[i])) {
    stack.push("(");
  } else {
    stack.pop();
    if (isOpenBracket(input[i - 1])) {
      answer += stack.length;
    } else {
      answer += 1;
    }
  }
}

console.log(answer);

function isOpenBracket(word) {
  return word === "(";
}
function isCloseBracket(word) {
  return word === ")";
}
//완전 접근 방식 자체가 좋지 못했다. 수학적인 연습이 필요할 것 같다.
//다시 풀어보자.
