// const path = "/dev/stdin";
const path = "input.txt";
let [len, arr] = require("fs").readFileSync(path).toString().split("\n");

arr = arr.split(" ").map((x) => +x);
let count = 0;
for (let i = 0; i < len; i++) {
  if (isDecimal(arr[i])) count++;
}
console.log(count);

function isDecimal(n) {
  if (n === 1) return false;
  const target = Math.sqrt(n);
  let i = 2;
  while (i <= target) {
    if (n % i++ === 0) {
      return false;
    }
  }
  return true;
}
