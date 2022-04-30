const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
//첫째 줄에 정점의 개수 N과 간선의 개수 M (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2)
const [N, M] = input.shift().split(" ").map(Number);

//둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어짐.
const graph = [];
const visited = Array(N + 1).fill(false);
let cnt = 0;

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
for (let i = 0; i < input.length; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    DFS(i);
    cnt++;
  }
}

console.log(cnt);

function DFS(v) {
  if (visited[v]) return;
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[graph[v][i]]) DFS(graph[v][i]);
  }
}
