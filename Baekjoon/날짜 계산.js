const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let E = 0;
let S = 0;
let M = 0;
let realYear = 15;

function decodeInputValues() {
  [E, S, M] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map((x) => +x);
}

function calculateRealYear() {
  while (true) {
    if (isETrue() && isSTrue() && isMTrue()) break;
    else realYear++;
  }
}

function isETrue() {
  let temp = realYear % 15 ? realYear % 15 : 15;
  return temp === E;
}
function isSTrue() {
  let temp = realYear % 28 ? realYear % 28 : 28;
  return temp === S;
}
function isMTrue() {
  let temp = realYear % 19 ? realYear % 19 : 19;
  return temp === M;
}

decodeInputValues();
calculateRealYear();
console.log(realYear);
