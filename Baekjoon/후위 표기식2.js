const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const testNumber = Number(input.shift());
const postfixNotation = input.shift().split("");
const regex = /[A-Z]/;
const Stack = [];

function converterToNumber(char) {
  const utf16Number = char.charCodeAt(0) - 65;
  return input[utf16Number];
}

for (let i = 0; i < postfixNotation.length; i++) {
  if (regex.test(postfixNotation[i])) {
    Stack.push(converterToNumber(postfixNotation[i]));
  } else {
    const a = Number(Stack.pop());
    const b = Number(Stack.pop());
    switch (postfixNotation[i]) {
      case "+":
        Stack.push(b + a);
        break;
      case "-":
        Stack.push(b - a);
        break;
      case "*":
        Stack.push(b * a);
        break;
      case "/":
        Stack.push(b / a);
        break;
      default:
    }
  }
}

console.log(Stack[0].toFixed(2));
//정규식, 소숫점 표기, 유니코드 표현등에 더 익숙해지자.
