const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const numbers = input[1].split(" ").map((x) => Number(x));

const stack = [];
let countNumbers = {};

for (let i = 0; i < numbers.length; i++) {
  if (countNumbers[numbers[i]]) {
    countNumbers[numbers[i]]++;
  } else {
    countNumbers[numbers[i]] = 1;
  }
}

function top() {
  return stack[stack.length - 1];
}
function noHaveNGF() {
  while (stack.length !== 0) {
    numbers[stack.pop()] = -1;
  }
}

for (let i = 0; i < numbers.length; i++) {
  while (
    (stack.length !== 0) &
    (countNumbers[numbers[top()]] < countNumbers[numbers[i]])
  ) {
    numbers[stack.pop()] = numbers[i];
  }
  stack.push(i);
}
noHaveNGF();

console.log(numbers.join(" "));
//오등큰수와 같은 문제는 앞서 푼 오큰수와 비슷하게 해결 할 수 있었다.
//테스트 개수를 살펴보면 이중 포문을 할 시 1초 (1억회)를 넘게된다.
//따라서 스택을 이용해서 풀어준다면 쉽게 풀 수 있다,
//스택수열과 유사한 문제..
