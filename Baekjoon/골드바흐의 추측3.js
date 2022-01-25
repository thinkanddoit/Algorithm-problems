const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const numbers = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const testNumber = numbers.shift();
const max = Math.max(...numbers);
const answer = [];

let arr = new Array(max + 1).fill(true).fill(false, 0, 2);
for (let i = 2; i <= Math.sqrt(max); i++) {
  if (arr[i]) {
    for (let j = i + i; j <= max; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 0; i < testNumber; i++) {
  let count = 0;
  const number = numbers[i];
  let target = 2;
  while (target <= number / 2) {
    if (arr[target] && arr[number - target]) {
      count++;
    }
    target++;
  }
  answer.push(count);
}
console.log(answer.join("\n"));
