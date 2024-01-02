/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let nums = [1, 3, 4, 1, 2, 3, 1];

const findMatrix = function (nums) {
  var freq = new Array(nums.length + 1).fill(0);
  const ans = [];

  console.log("freq 1: ", freq); // freq 1:  [ 0, 0, 0, 0, 0, 0, 0, 0]
  for (const c of nums) {
    if (freq[c] >= ans.length) {
      ans.push([]);
    }
    ans[freq[c]].push(c);
    freq[c]++;
  }
  console.log("freq 2: ", freq); // freq 2: [ 0, 3, 1, 2, 1, 0, 0, 0]
  console.log("ans: ", ans); // ans:  [ [ 1, 3, 4, 2 ], [ 1, 3 ], [ 1 ] ]
  return ans;
};

console.log(findMatrix(nums));
