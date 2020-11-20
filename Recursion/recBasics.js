"use strict";
// console.log("Recusrion basics");

//Sum of first n natural numbers
const sum = n => {
  if (n === 1) return 1;
  return n + sum(n - 1);
};
// console.log(sum(10));

let countStep1 = 0;
//a ^ b comp : O(b+1) = O(n)
const power = (a, b) => {
  countStep1++;
  if (b === 0) return 1;
  return a * power(a, b - 1);
};
// console.log(power(5, 10));
// console.log(countStep1);

let countStep2 = 0;
//a^b comp : O(log n)
const fastPower = (a, b) => {
  countStep2++;
  if (b === 0) return 1;
  if (b % 2 === 0) return fastPower(a * a, b / 2);
  return a * fastPower(a, b - 1);
};

// console.log(fastPower(5, 10));
// console.log(countStep2);

// path of mxn matrix
const path = (m, n) => {
  if (m === 0 || n === 0) return "Please Enter Matrix";
  if (m === 1 || n === 1) return 1;
  return path(m - 1, n) + path(m, n - 1);
};

console.log(path(3, 3));
