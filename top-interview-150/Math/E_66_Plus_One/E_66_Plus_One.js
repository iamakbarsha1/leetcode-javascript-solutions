/**
 * @param {number[]} digits
 * @return {number[]}
 */
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const plusOne = function (digits) {
  // digits = [1,2,3] || [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
  let arr = [];
  let arrJoined = BigInt(digits.join("")); // 123 || 6145390195186705543
  let num = arrJoined + BigInt(1);
  let addedString = String(num); // 124 || 6145390195186705544
  // console.log('num: ' , num); //! num:  6145390195186705544n
  // console.log('addedString: ' , addedString); //! addedString:  6145390195186705544

  for (const element of addedString) {
    arr.push(element);
  }

  return arr; // [1,2,4] || [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

  //!   Method 2:
  //   return BigInt(digits.join("") + BigInt(1))
  //     .toString()
  //     .split("");
};

console.log(plusOne(digits));
