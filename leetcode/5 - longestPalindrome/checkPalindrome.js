/**
 * Gets the length
 * @param {String} str
 * @param {Number} left
 * @param {Number} right
 * @returns {Number} - len of palindrome
 */
function checkPalindrome(str, left, right) {
  let changed = false;
  let l = left,
    r = right;
  while (0 <= l && r < str.length && str[l] === str[r]) {
    changed = true;
    l--;
    r++;
  }
  if (changed) return [l + 1, r - 1];
  else return [left, left];
}

module.exports = checkPalindrome;
