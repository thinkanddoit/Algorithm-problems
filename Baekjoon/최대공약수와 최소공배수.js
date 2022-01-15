const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [first, second] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

const commonDivisor = [1];

while (true) {
  const smaller = first > second ? second : first;
  let isEnd = true;

  for (let i = 2; i <= smaller; i++) {
    if (first % i === 0 && second % i === 0) {
      commonDivisor.push(i);
      first /= i;
      second /= i;
      isEnd = false;
      break;
    }
  }
  if (isEnd) break;
}
const GCD = commonDivisor.reduce((a, b) => a * b);
const LCM = GCD * first * second;
console.log(GCD + "\n" + LCM);

//속도를 낮출수 있는 법
//LCM * GCD = first * second 이다. (여기서 first 와 second는 처음 값)
//따라서 GCD를 우선 구하고 나서 LCM을 바로 구할 수 있다.
