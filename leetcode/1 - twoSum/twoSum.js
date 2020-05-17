/**
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1]. 

 */

/**
 * twoSum
 * @param {Array} arr - array of integers
 * @param {Number} target - a target integer
 * @returns {Array | Undefined} - Indeces of two nums that sum to target
 */

/*
  Contraints:
   - O(n) time
  Edge cases:
   - No solution => undefined
   - Array length < 2
   - Return first occurence


  Pseudocode: 
  handle length
  defined seen (hashtable)
  iterate thru
    lookup comp in seen and return
    or write comp to seen

*/

const twoSum = (arr, target) => {
  if (arr.length < 2) return;
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const comp = target - arr[i];
    if (typeof seen[comp] === 'number') return [seen[comp], i];
    else seen[arr[i]] = i;
  }
};

module.exports = twoSum;
