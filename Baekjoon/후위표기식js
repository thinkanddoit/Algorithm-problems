const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("");
const Stack = [];
const answer = [];

function priorityConvertor(operator) {
  if (operator === "(" || operator === ")") return 3;
  else if (operator === "*" || operator === "/") return 2;
  else if (operator === "+" || operator === "-") return 1;
  else return 0;
}

for (let i = 0; i < input.length; i++) {
  if (priorityConvertor(input[i]) === 0) {
    answer.push(input[i]);
  } else if (input[i] === "(") {
    Stack.push(input[i]);
  } else if (input[i] === ")") {
    while (Stack[Stack.length - 1] !== "(") {
      answer.push(Stack.pop());
    }
    Stack.pop();
  } else {
    while (
      Stack.length &&
      priorityConvertor(Stack[Stack.length - 1]) >=
        priorityConvertor(input[i]) &&
      Stack[Stack.length - 1] !== "("
    ) {
      answer.push(Stack.pop());
    }
    Stack.push(input[i]);
  }
}
while (Stack.length !== 0) {
  answer.push(Stack.pop());
}
console.log(answer.join(""));
