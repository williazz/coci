/**
 * Returns the same string for anagrams, assuming input consists of lowercase alphabet letters
 * @param {String} str
 * @returns {String}
 */

function getKeyFromAnagram(str) {
  const letters = new Array(26).fill(0);
  const shift = 'a'.charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    const position = str.charCodeAt(i) - shift;
    letters[position]++;
  }
  return letters.join('#');
}

module.exports = getKeyFromAnagram;
