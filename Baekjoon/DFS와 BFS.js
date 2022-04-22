const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

//1부터 N 까지
//간선의 갯수 : M
//시작 포인트 V

//어려운 점..
//우선 같은 레벨에 있는 노드여도 정점이 낮은 수부터 먼저 방문한다.

const Tree = Array(N + 1)
  .fill()
  .map(() => []);

initializeTree(input, Tree);
console.log(Tree[1]);
dfs(Tree, V);
bfs(Tree, V);

function initializeTree(rawData, Tree) {
  rawData.map((row) => {
    const [x, y] = row.split(" ").map(Number);
    Tree[x].push(y);
    Tree[y].push(x);
  });
  Tree.map((arr) => arr.sort((a, b) => a - b));
}

function dfs(Tree, start) {
  const path = [];
  const queue = [start];
  const visited = [];

  while (queue.length) {
    const current = queue.shift();
    if (visited[current]) continue;
    visited[current] = 1;
    path.push(current);
    //reverse는 원본 배열이 변경된다.
    [...Tree[current]].reverse().map((index) => {
      if (!visited[index]) {
        queue.unshift(index);
      }
    });
  }
  console.log(path.join(" "));
}

function bfs(Tree, start) {
  const path = [];
  const queue = [start];
  const visited = [];
  visited[start] = 1;

  while (queue.length) {
    const current = queue.shift();
    path.push(current);

    Tree[current].map((index) => {
      if (!visited[index]) {
        visited[index] = 1;
        queue.push(index);
      }
    });
  }
  console.log(path.join(" "));
}
