const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().split("");

const encryptedString = [];
const regex = /[a-zA-Z]/;

for (let i = 0; i < input.length; i++) {
  let temp = input[i].charCodeAt(0) + 13;
  if (/[A-Z]/.test(input[i])) {
    if (temp > 90) temp -= 26;
    encryptedString.push(String.fromCharCode(temp));
  } else if (/[a-z]/.test(input[i])) {
    if (temp > 122) temp -= 26;
    encryptedString.push(String.fromCharCode(temp));
  } else encryptedString.push(input[i]);
}

console.log(encryptedString.join(""));
