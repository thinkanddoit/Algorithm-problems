const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = +require("fs").readFileSync(path).toString();

function factory(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factory(n - 1);
}
let answer = 0;
console.log(factory(5));
while (input >= 5) {
  answer += Math.floor(input / 5);
  input /= 5;
}
console.log(answer);
