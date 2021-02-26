const _ = require('lodash');
const isPalindrome = require('./isPalindrome');
const buildLL = require('../../util/buildLL');

console.assert(isPalindrome(buildLL([])));
console.assert(isPalindrome(buildLL([1])));
console.assert(isPalindrome(buildLL([1, 2, 3, 2, 1])));
console.assert(isPalindrome(buildLL([1, 2, 3, 3, 2, 1])));
console.assert(!isPalindrome(buildLL([1, 2, 3, 3, 5, 2, 1])));
console.assert(!isPalindrome(buildLL([0, 2, 3, 3, 2, 1])));
