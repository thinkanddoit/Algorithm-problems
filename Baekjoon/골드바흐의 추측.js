const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((x) => +x);

const T = input.shift();
const max = Math.max(...input);

let arr = new Array(max + 1).fill(true).fill(false, 0, 2);
for (let i = 2; i * i <= max; i++) {
  if (arr[i]) {
    for (let j = i + i; j <= max; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = 0; i < T; i++) {
  let target = input[i] / 2;
  while (true) {
    if (arr[target] && arr[input[i] - target]) {
      console.log(`${target} ${input[i] - target}`);
      break;
    } else {
      target--;
    }
  }
}

// 1번 시도

// const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = require("fs")
//   .readFileSync(path)
//   .toString()
//   .split("\n")
//   .map((x) => +x);

// const T = input.shift();

// for (let i = 0; i < T; i++) {
//   let target = input[i] / 2;
//   while (true) {
//     if (solve(target) && solve(input[i] - target)) {
//       console.log(`${target} ${input[i] - target}`);
//       break;
//     } else {
//       target--;
//     }
//   }
// }

// function solve(n) {
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
