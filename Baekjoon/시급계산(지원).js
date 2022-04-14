const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

let totalWorkingTime = 0;

input.forEach((x) => {
  totalWorkingTime += getWorkingHours(x[0], x[1]);
});

function getWorkingHours(startTime, endTime) {
  const [startHr, startMi] = startTime.split(":").map((x) => +x);
  const [endHr, endMi] = endTime.split(":").map((x) => +x);

  let workingHours = 60 * endHr + endMi - 60 * startHr - startMi;
  if (workingHours > 480) workingHours -= 60;
  else if (workingHours > 240) workingHours -= 30;
  return workingHours;
}

console.log(Math.floor(totalWorkingTime / 60), totalWorkingTime % 60);
console.log((totalWorkingTime / 60) * 9160);
