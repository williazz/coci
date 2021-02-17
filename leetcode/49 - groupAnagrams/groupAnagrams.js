/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * @param {String[]} strs lowercase letters
 * @returns {String[][]} Where anagrams are grouped together
 */

/*
Constraints:
  Time: O(nk) where k is longest str len
  Space: O(nk)

Strategy:
  grams = {}
  Iterate thru
    getKeyFromAnagram()
    write to grams
  return vals from grams
*/

function groupAnagrams(strs) {
  const grams = {};
  for (let i = 0; i < strs.length; i++) {
    const key = getKeyFromAnagram(strs[i]);
    if (!grams[key]) grams[key] = [strs[i]];
    else grams[key].push(strs[i]);
  }
  return Object.values(grams);
}

module.exports = groupAnagrams;
