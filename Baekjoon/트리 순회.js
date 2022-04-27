const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = +input.shift();

const tree = {};

for (const row of input) {
  const [node, left, right] = row.split(" ");
  tree[node] = [left, right];
}

const preResult = [];
const inResult = [];
const postResult = [];

preorder("A");
inorder("A");
postorder("A");

console.log(preResult.join(""));
console.log(inResult.join(""));
console.log(postResult.join(""));

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  preResult.push(node);
  preorder(left);
  preorder(right);
}
function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  inResult.push(node);
  inorder(right);
}
function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  postResult.push(node);
}
