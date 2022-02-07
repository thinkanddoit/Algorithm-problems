const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const count = +input.shift();
const numbers = input[0].split(" ").map((x) => +x);
numbers.unshift(0); //인덱싱을 1부터 시작하기 위해 0자리 추가

const dp1 = new Array(count + 1).fill(0); //최장부분수열 길이
const dp2 = [0]; //범위 저장(역시 인덱싱을 위해 0자리 추가)

dp1[1] = 1;
dp2.push(numbers[1]);

// console.log(dp1, dp2);

for (let i = 2; i <= count; i++) {
  let j = 1;
  while (true) {
    if (j === dp2.length) {
      dp1[i] = dp2.length;
      dp2.push(numbers[i]);
      break;
    } else if (numbers[i] <= dp2[j]) {
      dp1[i] = j;
      if (numbers[i] < dp2[j]) dp2[j] = numbers[i];
      break;
    } else {
      j++;
    }
  }
}
const max = Math.max(...dp1);
console.log(max);
let answer = [];
let target = max;
for (let j = dp1.length - 1; j > 0; j--) {
  if (dp1[j] === target) {
    target--;
    answer.push(numbers[j]);
  }
}
console.log(answer.reverse().join(" "));
