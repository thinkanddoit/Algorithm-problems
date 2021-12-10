const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(path).toString();

// const star = (n) => {
//   if (n === 1) {
//     return ["*"];
//   }
//   const prevStar = star(n / 3);
//   const top = prevStar.map((s) => s.repeat(3));
//   const mid = prevStar.map((s) => s + " ".repeat(s.length) + s);

//   return [...top, ...mid, ...top];
// };

// console.log(star(input).join("\n"));

function solve(n) {
  if (n === 1) {
    return ["*"];
  }
  const smaller = solve(n / 3);
  const a = smaller.map((x) => x.repeat(3));
  const b = smaller.map((x) => x + " ".repeat(x.length) + x);

  return [...a, ...b, ...a];
}

console.log(solve(input).join("\n"));

// function solve(i, j, number) {
//   if (i % 3 === 1 && j % 3 === 1) {
//     return " ";
//   } else {
//     if (number === 1) {
//       return "*";
//     } else {
//       return solve(
//         Math.floor(i / 3),
//         Math.floor(j / 3),
//         Math.floor(number / 3)
//       );
//     }
//   }
// }

// let answer = "";
// for (let i = 0; i < input; i++) {
//   for (let j = 0; j < input; j++) {
//     answer += solve(i, j, input);
//   }
//   answer += "\n";
// }

// console.log(answer);
