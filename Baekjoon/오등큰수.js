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
