/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// Approaches
// (Also explained in the code)

// 1. Sort Both Greedy and size array.
// 2. initialize index and cnt to 0.
// 3. increment cnt when s[index] from size array is greater than g[cnt].
// 4. after every loop increment index.
// 5. Return cnt as answer.

// I/P
let g = [1, 2, 3, 4];
let s = [1, 2, 3];

const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let index = 0;
  let cnt = 0;

  while (index < s.length && cnt < g.length) {
    if (s[index] >= g[cnt]) {
      cnt++;
    }
    index++;
  }
  return cnt;
};

console.log("findContentChildren(g, s): ", findContentChildren(g, s));

// Expected O/P
// 2
