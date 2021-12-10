const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(path).toString();

let answer = [];

function solve(number, from, to, by) {
  if (number === 1) {
    answer.push(from + " " + to);
  } else {
    solve(number - 1, from, by, to);
    answer.push(from + " " + to);
    solve(number - 1, by, to, from);
  }
}

solve(input, 1, 3, 2);

console.log(answer.length);
console.log(answer.join("\n"));
