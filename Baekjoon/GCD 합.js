const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const bigTestNumber = +input.shift();
const answer = [];

//GCD의 합 문제
//유클리드 호제법을 사용했다. O(logN)

for (let i = 0; i < bigTestNumber; i++) {
  const numbers = input[i].split(" ").map((x) => +x);
  const smallTestNumber = numbers.shift();
  const GCDs = [];
  numbers.sort((a, b) => b - a); //내림치순으로 정렬

  for (let i = 0; i < smallTestNumber; i++) {
    for (let j = i + 1; j < smallTestNumber; j++) {
      GCDs.push(gcd2(numbers[i], numbers[j]));
    }
  }
  answer.push(GCDs.reduce((a, b) => a + b)); //GCD의 합을 구해서 정답 배열에 넣어준다
}

//재귀로 수행
function gcd(bigger, smaller) {
  if (smaller === 0) return bigger;
  else {
    return gcd(smaller, bigger % smaller);
  }
}

//while문으로 수행
function gcd2(bigger, smaller) {
  let rest = 0;
  while (true) {
    rest = bigger % smaller;
    bigger = smaller;
    smaller = rest;
    if (smaller === 0) break;
  }
  return bigger;
}

console.log(answer.join("\n"));
