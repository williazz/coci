/*
  Given a string s, find the longest palindromic substring in s. 
  You may assume that the maximum length of s is 1000.

  Example 1:

  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.
  Example 2:

  Input: "cbbd"
  Output: "bb"

  brute force:
    look at every substr
    reverse and compare

  sliding window:

    left = 0, right = len - 1;

    b d b b d

    l       r



*/

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {};

module.exports = longestPalindrome;
