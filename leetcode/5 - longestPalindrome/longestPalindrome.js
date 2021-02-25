const checkPalindrome = require('./checkPalindrome');

/*
  Given a string s, find the longest palindromic substring in s. 

  Strategy

  longestPal(str) {
    iterate
      checkPalindrome(odd)
      checkPalindrome(even)
    return longest
  }

  checkPalindrome(str, left, right) {
    while(left & right in bounds && equal vals)
      increment & decrement
    return l+r - 1

  }

*/

/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  if (!s) return 0;
  let longest = [0, 0];
  for (let i = 0; i < s.length; i++) {
    const odd = checkPalindrome(s, i, i);
    if (odd[1] - odd[0] > longest[1] - longest[0]) longest = odd;
    if (i > 0) {
      const even = checkPalindrome(s, i - 1, i);
      if (even[1] - even[0] > longest[1] - longest[0]) longest = even;
    }
  }
  return s.substr(longest[0], longest[1] + 1);
}

module.exports = longestPalindrome;
