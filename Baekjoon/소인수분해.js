// const path = "/dev/stdin";
const path = "input.txt";

// let input = Number(require("fs").readFileSync(path).toString());

// let x = 2;
// while (input > 1) {
//   if (input % x === 0) {
//     input = input / x;
//     console.log(x);
//   } else {
//     if (x++ === input) break;
//   }
// }

let input = Number(require("fs").readFileSync(path).toString());

for (let i = 2; i * i <= input; i++) {
  while (input % i === 0) {
    console.log(i);
    input = input / i;
  }
}
if (input !== 1) console.log(input);
