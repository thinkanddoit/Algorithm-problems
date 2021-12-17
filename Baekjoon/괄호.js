const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const len = +input.shift();

let answer = "";

for (let i = 0; i < len; i++) {
  const Stack = [];
  const arr = input[i].split("");
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") Stack.push("(");
    else {
      const top = Stack.pop();
      if (!top) {
        Stack.push(-1);
        break;
      }
    }
  }
  if (Stack.length !== 0) answer += "NO" + "\n";
  else answer += "YES" + "\n";
}

console.log(answer);
