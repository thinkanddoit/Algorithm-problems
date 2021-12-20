const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const leftArray = input.shift().split("");
const rightArray = [];

const inputLineCount = +input.shift();

for (let i = 0; i < inputLineCount; i++) {
  if (input[i][0] === "L") {
    const fromLeft = leftArray.pop();
    if (fromLeft) rightArray.push(fromLeft);
  } else if (input[i][0] === "D") {
    const fromRight = rightArray.pop();
    if (fromRight) leftArray.push(fromRight);
  } else if (input[i][0] === "B") leftArray.pop();
  else if (input[i][0] === "P") {
    const toAdd = input[i].split(" ")[1];
    leftArray.push(toAdd);
  }
}
console.log([...leftArray, ...rightArray.reverse()].join(""));
