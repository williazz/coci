/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * @param {Number[]} nums sorted array of numbers
 * @returns {Number} length of modified array with duplicates in the back
 */

/*

  Constraints: 
   - O(1) space

  Edge cases:
    - len = 0, 1

  Brute Force:
   - Search for dups linearly and set to null
   - Sort

  Optimal Strategy: Rabit and Hare
   - slo = 0
   - iterate fast = 1 -> len
     - compare vals 
     - write or increment slo
   - return slo + 1
*/

function removeDuplicates(nums) {
  if (!nums.length) return 0;
  let s = 0;
  for (let f = 1; f < nums.length; f++) {
    if (nums[s] !== nums[f]) {
      nums[s + 1] = nums[f];
      s++;
    }
  }
  return s + 1;
}

module.exports = removeDuplicates;
