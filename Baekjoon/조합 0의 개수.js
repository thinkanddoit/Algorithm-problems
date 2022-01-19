const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [n, r] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));

function factory(n) {
  if (n === 1 || n === 0) return 1n;
  else return BigInt(n) * factory(n - 1);
}
let nCr = factory(n) / (factory(n - r) * factory(r));
let answer = 0;
nCr = nCr.toString();

for (let i = nCr.length - 1; i >= 0; i--) {
  if (+nCr[i]) break;
  드;
  answer++;
}
console.log(answer);
