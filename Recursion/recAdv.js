"use strict";

//Flood Fill

const a = [
  [1, 2, 4, 3],
  [1, 4, 4, 4],
  [1, 3, 4, 3],
  [1, 1, 3, 1]
];

const fill = (a, r, c, toFill, prevFill) => {
  if (
    r < 0 ||
    r >= a.length ||
    c < 0 ||
    c >= a[0].length ||
    a[r][c] != prevFill
  )
    return;
  a[r][c] = toFill;
  fill(a, r - 1, c, toFill, prevFill);
  fill(a, r, c + 1, toFill, prevFill);
  fill(a, r + 1, c, toFill, prevFill);
  fill(a, r, c - 1, toFill, prevFill);
};
console.log(JSON.parse(JSON.stringify(a)));
fill(a, 0, 0, 5, 1);
console.log(a);
