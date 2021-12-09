const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().split("\n");

const len = input.shift();
let answer = "";

for (let i = 0; i < len; i++) {
  const [x, y, r, a, b, t] = input[i].split(" ").map((x) => +x);
  const d = Math.sqrt(Math.pow(x - a, 2) + Math.pow(y - b, 2));
  const z = r + t;
  const q = r > t ? r - t : t - r;
  // 0,1,2,-1
  //1인 경우 외접, 내접
  //0인 경우 외부, 내부
  //-1인 경우 같은 원
  //2인 경우 그외
  if (d === 0) {
    //같은 원
    if (r === t) answer += -1 + "\n";
    else answer += 0 + "\n";
  } else if (d === z) {
    //외접
    answer += 1 + "\n";
  } else if (d === q) {
    //내접
    answer += 1 + "\n";
  } else if (d > z) {
    //외부에서 만나지 않는 경우
    answer += 0 + "\n";
  } else if (d < q) {
    //내부에서 만나지 않는 경우
    answer += 0 + "\n";
  } else {
    answer += 2 + "\n";
  }
}

console.log(answer);
