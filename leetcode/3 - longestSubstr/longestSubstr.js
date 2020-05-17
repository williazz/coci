/*
  3. Longest Substring Without Repeating Characters
  Medium

  Given a string, find the length of the longest substring without repeating characters.

  Example 1:

  Input: "abcazxyb"
  Output: 3 
  Explanation: The answer is "abc", with the length of 3. 
  Example 2:

  Input: "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  Example 3:

  Input: "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.





  a b c a b x y b
  a b c a z x y b"
  i:            ^ 
  
longest = 0... (update every letter)

len 3

on finding something i remember
 len = i - mem[letter]

mem = {
  a: 3
  b: 4
  c: 2
}

  pseudo:
    handle len=0
    define mem, res, left
    iterate thru
      if remember, update left to the closer of i and rem
      always update mem and res

*/

/**
 * @param {string} s
 * @return {number}
 */
const longestSubstr = function(s) {
  if (!s) return 0;
  const mem = {};
  let res = 0;
  let left = -1;
  for (let i = 0; i < s.length; i++) {
    const rem = mem[s[i]];
    if (typeof rem === 'number' && left < rem) left = rem;
    mem[s[i]] = i;
    const len = i - left;
    if (len > res) res = len;
  }
  return res;
};

module.exports = longestSubstr;
