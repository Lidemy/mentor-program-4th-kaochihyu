// 基本架構
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function isPrime(n) {
  if (n === 1) return false;
  const m = n;
  for (let i = 2; i <= m - 1; i += 1) {
    if (m % i === 0) {
      return false;
    }
  }
  return true;
}
/* eslint-disable no-unused-vars */
/* eslint no-plusplus: "error" */
function solve(input) {
  for (let i = 1; i < input.length; i += 1) {
    const num = Number(input[i]);
    if (isPrime(num) === true) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
