const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().split("\n");
const T = +input.shift();
let answer = new Array(T).fill(1);
for (let i = 0; i < T; i++) {
  for (let j = i + 1; j < T; j++) {
    const [iw, ih] = input[i].split(" ").map((x) => +x);
    const [jw, jh] = input[j].split(" ").map((x) => +x);
    if (iw < jw && ih < jh) answer[i]++;
    else if (jw < iw && jh < ih) answer[j]++;
  }
}

console.log(answer.join(" "));
