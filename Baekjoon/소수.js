// const path = "/dev/stdin";
const path = "input.txt";

const [x, y] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const result = solution(x, y);
if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.reduce((a, c) => a + c));
  console.log(result[0]);
}

function solution(m, n) {
  let arr = new Array(n + 1).fill(true).fill(false, 0, 2);
  let answer = [];

  for (let i = 0; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  arr.map((x, i) => {
    if (x === true && i >= m) {
      answer.push(i);
    }
  });

  return answer;
}
