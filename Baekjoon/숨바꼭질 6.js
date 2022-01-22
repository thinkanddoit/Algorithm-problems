const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map((x) => +x);
const arrayOfA = input[1].split(" ").map((x) => Math.abs(S - Number(x)));
arrayOfA.sort((a, b) => b - a);

function gcd(bigger, smaller) {
  if (smaller === 0) return bigger;
  else return gcd(smaller, bigger % smaller);
}
console.log(arrayOfA.reduce((a, b) => gcd(a, b)));
