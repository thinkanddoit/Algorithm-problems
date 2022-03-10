const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let E = 0;
let S = 0;
let M = 0;
let realYear = 1;
let lcmValue = 0;

const gcd = (a, b) => {
  if (b === 0) return a;
  else return gcd(b, a % b);
};

const lcm = (a, b) => (a * b) / gcd(a, b);

function decodeInputValues() {
  [E, S, M] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map((x) => +x);
  lcmValue = lcm(E, lcm(S, M));
}

function calculateRealYear() {
  while (true) {
    if (isETrue() && isSTrue() && isMTrue()) break;
    else realYear++;
  }
}

function isETrue() {
  return (realYear - E) % 15 === 0;
}

function isSTrue() {
  return (realYear - S) % 28 === 0;
}
function isMTrue() {
  return (realYear - M) % 19 === 0;
}

decodeInputValues();
calculateRealYear();
console.log(realYear);
