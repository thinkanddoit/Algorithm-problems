const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [x, y] = require("fs")
  .readFileSync(path)
  .toString()
  .split(" ")
  .map((x) => +x);

console.log(solution(x, y));

function solution(x, y) {
  let arr = new Array(y + 1).fill(true).fill(false, 0, 2);
  let answer = "";
  for (let i = 2; i * i <= y; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= y; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = x; i <= y; i++) {
    if (arr[i]) answer += i + "\n";
  }

  return answer;
}
