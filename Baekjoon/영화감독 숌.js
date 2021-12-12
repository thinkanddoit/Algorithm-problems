const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const N = +require("fs").readFileSync(path).toString();

count = 0;
let number = 666;

while (true) {
  if (number.toString().indexOf("666") !== -1) count++;
  if (count === input) {
    console.log(number);
    break;
  }
  number++;
}

//1등코드 분석 나중에....
// const N = +require("fs").readFileSync("dev/stdin").toString();
// let [n, c1, c2] = [1, 0, undefined];
// let d, t;

// if (N === 1) {
//   console.log("666");
//   process.exit(0);
// }
// while (n !== N) {
//   c1++;
//   n++;

//   d = 0;
//   t = c1;
//   while (t % 10 === 6 && d < 3) {
//     t = Math.floor(t * 0.1);
//     d++;
//   }
//   if (d === 0) {
//     c2 = undefined;
//   } else if (d >= 1) {
//     c2 = 0;
//     while (n !== N && c2 < Math.pow(10, d) - 1) {
//       c2++;
//       n++;
//     }
//   }
//   console.log(c1, n, c2, d);
// }

// if (c2 === undefined) {
//   console.log(c1 + "666");
// } else {
//   c2 = c2.toString();ㄴ
//   console.log(
//     c1 + "666".slice(0, 3 - d) + new Array(d - c2.length + 1).join("0") + c2
//   );
// }
