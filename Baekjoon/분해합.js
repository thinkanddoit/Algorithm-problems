const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(path).toString();

let min = 1000002;

let start;
if (input > 100000) {
  start = input - 9 * 6;
} else if (input > 10000) {
  start = input - 9 * 5;
} else if (input > 1000) {
  start = input - 9 * 4;
} else if (input > 100) {
  start = input - 9 * 3;
} else {
  start = 1;
}

for (let i = start; i <= input; i++) {
  let sum = i;
  i.toString()
    .split("")
    .map((x) => (sum += Number(x)));
  if (sum === input && i < min) min = i;
}

if (min === 1000002) console.log(0);
else console.log(min);
