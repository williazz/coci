/*
  strategy
    sliding window: always have two pointers contain a unique substr
      use a hash table to keep track of where you have last seen values
      use the left pointer to avoid using stale vals from the hash table
      update longest every time  
*/

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstr = function(s) {
  let res = 0;
  const seen = {};
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] >= left) {
      left = seen[s[i]] + 1;
    }
    res = Math.max(res, i - left + 1);
    seen[s[i]] = i;
  }
  return res;
};

module.exports = longestSubstr;
