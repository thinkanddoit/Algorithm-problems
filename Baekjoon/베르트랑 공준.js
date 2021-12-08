const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
//각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.
let answer = "";
let input = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((x) => {
    if (x !== "0") {
      answer += solution(Number(x)) + "\n";
    } else {
      console.log(answer.trim());
    }
  });

function solution(n) {
  let arr = new Array(2 * n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= 2 * n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= 2 * n; j += i) {
        arr[j] = false;
      }
    }
  }
  let count = 0;
  for (let k = n + 1; k <= 2 * n; k++) {
    if (arr[k]) count++;
  }
  return count;
}
