const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
// N : 사람수
// M : 친구 관계의 수

const friendMap = Array(N + 1)
  .fill()
  .map(() => Array(N + 1).fill(0));

fillFriendMap();

function fillFriendMap() {
  ㅇ;
  input.map((row) => {
    const [x, y] = row.split(" ").map(Number);
    friendMap[x][y] = friendMap[y][x] = 1;
  });
}
function isDepthSatisfied() {
  const queue = [];
  function dfs() {}
}
