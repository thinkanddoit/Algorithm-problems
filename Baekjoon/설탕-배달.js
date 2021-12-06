// const path = "/dev/stdin";
const path = "input.txt";

let input = Number(require("fs").readFileSync(path).toString());
if (input % 5 === 0) {
  console.log(input / 5);
} else {
  let count = Math.floor(input / 5);
  let rest = input % 5;

  while (input >= rest) {
    if (rest % 3 === 0) {
      count += rest / 3;
      break;
    } else {
      rest += 5;
      count--;
    }
  }
  if (input < rest) {
    console.log(-1);
  } else {
    console.log(count);
  }
}
