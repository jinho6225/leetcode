/*
771. Jewels and Stones
Easy

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/
/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
  var targetArr = S.split('')
  var arr = J.split('')
  var count = 0;
  for (let i = 0; i < targetArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === targetArr[i]) {
        count++
      }
    }
  }
  return count
};

//more fast code below

var numJewelsInStones = function(J, S) {
  let jArr = J.split('')
  let sArr = S.split('')
  let count = 0;
  sArr.forEach((e) => {
    if (jArr.includes(e)) {
      count++
    }
  })
  return count
};

var J = "aA"
var S = "aAAbbbb"
numJewelsInStones(J, S)
