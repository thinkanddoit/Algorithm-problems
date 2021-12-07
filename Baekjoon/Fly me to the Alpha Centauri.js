// const path = "/dev/stdin";
const path = "input.txt";

let input = require("fs").readFileSync(path).toString().split("\n");
const len = input.shift();

for (let i = 0; i < len; i++) {
  const [x, y] = input[i].split(" ").map((x) => +x);
  let count = 0;
  let sum = y - x;
  let k = 1;
  let notTwo = 0;
  while (sum !== 0) {
    if (sum - k >= 0) {
      sum -= k;
      count++;
    } else {
      count++;
      sum = 0;
      break;
    }
    if (++notTwo === 2) {
      k++;
      notTwo = 0;
    }
  }
  console.log(count);
}
