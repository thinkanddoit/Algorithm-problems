const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const numbers = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const N = numbers.shift();

const Stack = [];
let answer = [];
let number = 0;

for (let i = 1; i <= N; i++) {
  Stack.push(i);
  answer.push("+");

  if (numbers[number] < Stack[Stack.length - 1]) {
    break;
  }

  while (numbers[number] === Stack[Stack.length - 1] && numbers[number]) {
    number++;
    Stack.pop();
    answer.push("-");
  }
}
if (Stack.length !== 0) console.log("NO");
else console.log(answer.join("\n"));
