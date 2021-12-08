const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().split("\n");

let xarry = [];
let yarry = [];

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ");
  if (xarry.indexOf(x) !== -1) {
    xarry.splice(xarry.indexOf(x), 1);
  } else {
    xarry.push(x);
  }
  if (yarry.indexOf(y) !== -1) {
    yarry.splice(yarry.indexOf(y), 1);
  } else {
    yarry.push(y);
  }
}
console.log(`${Number(xarry[0])} ${Number(yarry[0])}`);
