// 基本架構
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

/* eslint-disable no-unused-vars */
/* eslint no-plusplus: "error" */
function digitsCount(n) {
  let d = n;
  if (d === 0) return 1;
  let result = 0;
  while (d !== 0) {
    d = Math.floor(d / 10);
    result += 1;
  }
  return result;
}

function isNarcissitic(n) {
  let m = n;
  const digit = digitsCount(m);
  let sum = 0;
  while (m !== 0) {
    const num = m % 10;
    sum += num ** digit;
    m = Math.floor(m / 10);
  }
  return sum === n;
}

function solve(input) {
  const temp = input[0].split(' ');
  const N = Number(temp[0]);
  const M = Number(temp[1]);
  for (let i = N; i <= M; i += 1) {
    if (isNarcissitic(i)) {
      console.log(i);
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
