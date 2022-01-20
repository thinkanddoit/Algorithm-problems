const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = +require("fs").readFileSync(path).toString();

let answer = 0;

while (input >= 5) {
  answer += Math.floor(input / 5);
  input /= 5;
}
console.log(answer);
