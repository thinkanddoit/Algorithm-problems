const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const T = +input.shift();

const Stack = [];
let result = [];

for (let i = 0; i < T; i++) {
  if (input[i] === "top")
    result.push(Stack.length !== 0 ? Stack[Stack.length - 1] : -1);
  else if (input[i] === "size") result.push(Stack.length);
  else if (input[i] === "empty") result.push(Stack.length === 0 ? 1 : 0);
  else if (input[i] === "pop")
    result.push(Stack.length !== 0 ? Stack.pop() : -1);
  else {
    const command = input[i].split(" ");
    Stack.push(command[1]);
  }
}

console.log(result.join("\n"));
