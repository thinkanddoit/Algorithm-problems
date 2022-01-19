const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const numbers = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

let answer = [];
const max = Math.max(...numbers);
let arr = new Array(max + 1).fill(true).fill(false, 0, 2);

for (let i = 2; i * i <= max; i++) {
  if (arr[i]) {
    for (let j = i + i; j <= max; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    console.log(answer.join("\n"));
    break;
  } else {
    let target = 2;
    while (true) {
      if (arr[target] && arr[numbers[i] - target]) {
        answer.push(`${numbers[i]} = ${target} + ${numbers[i] - target}`);
        break;
      } else {
        target++;
      }
    }
  }
}
