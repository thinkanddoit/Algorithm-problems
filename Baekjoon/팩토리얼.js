const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString();

console.log(factory(Number(input)));

function factory(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factory(n - 1);
}
