// const path = "/dev/stdin";
const path = "input.txt";

let input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const [H, W, N] = input[i].split(" ").map((x) => +x);
  const Y = N % H === 0 ? H : N % H;
  const X = Math.ceil(N / H) < 10 ? "0" + Math.ceil(N / H) : Math.ceil(N / H);
  console.log(`${Y}${X}`);
}
