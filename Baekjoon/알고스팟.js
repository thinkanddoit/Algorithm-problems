const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);

//const MAP = input.map((row) => row.split("").map((n) => +n));
//위 방식이 아니라 이렇게 수로 변환해 담을 수 있다.
//수 변환 뿐만 아니라 row라는 parameter의 명명을 의미있게 해주자.
const MAP = input.map((row) => row.split("").map(Number));

const deQueue = [[0, 0, 0]];
const vistied = Array(N)
  .fill()
  .map(() => Array(M).fill(false));
vistied[0][0] = true;

const xWay = [1, 0, -1, 0];
const yWay = [0, 1, 0, -1];

function bfs() {
  //이동할 수 있는 경우의 수 4개지이다. 좌, 우, 상, 하
  while (deQueue.length) {
    const [currentX, currentY, brokenWallCount] = deQueue.shift();

    if (currentX === N - 1 && currentY === M - 1) return brokenWallCount;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [currentX + xWay[i], currentY + yWay[i]];
      if (nx < 0 || nx > N - 1 || ny < 0 || ny > M - 1) continue;
      if (vistied[nx][ny]) continue;
      vistied[nx][ny] = true;
      if (MAP[nx][ny]) {
        MAP[nx][ny] === 0;
        deQueue.push([nx, ny, brokenWallCount + 1]);
      } else {
        deQueue.unshift([nx, ny, brokenWallCount]);
      }
    }
  }
}

console.log(bfs());
