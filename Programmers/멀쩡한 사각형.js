const width = 8;
const height = 12;

function solution(w, h) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  const allBoardNumber = w * h;
  const gcdOfWH = gcd(w, h);

  return allBoardNumber - (w / gcdOfWH + h / gcdOfWH - 1) * gcdOfWH;
}
