/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Approach : Using STL
// Traverse through nums2 and append its elements to the end of nums1 starting from index m.
// Sort the entire nums1 array using sort() function.

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

const merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b); // nums1: [ 1, 2, 2, 3, 5, 6 ]
  console.log(nums1);
};

merge(nums1, m, nums2, n); // [ 1, 2, 2, 3, 5, 6 ]
