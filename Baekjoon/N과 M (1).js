const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, M] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}
const getPermutations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) =>
      [fixed, ...permutation].join(" ")
    );

    results.push(...attached);
  });
  return results;
};
console.log(getPermutations(arr, M).join("\n"));
