// 基本架構
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function isPalindrome(n) {
  let result = '';
  for (let i = n.length - 1; i >= 0; i -= 1) {
    result += n[i];
  }
  if (result !== n) {
    return false;
  }
  return true;
}
/* eslint-disable no-unused-vars */
/* eslint no-plusplus: "error" */
function solve(input) {
  const str = input[0];
  if (isPalindrome(str)) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => {
  solve(lines);
});
