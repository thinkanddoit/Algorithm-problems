const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().split("\n");
const regex = [/[a-z]/, /[A-Z]/, /[0-9]/, /[\s]/];
const answer = [];

for (let i = 0; i < input.length; i++) {
  let testResultOfOneLine = new Array(4).fill(0);

  for (let j = 0; j < input[i].length; j++) {
    for (let k = 0; k < 4; k++) {
      if (regex[k].test(input[i][j])) testResultOfOneLine[k]++;
    }
  }
  answer.push(testResultOfOneLine.join(" "));
}
console.log(answer.join("\n"));
