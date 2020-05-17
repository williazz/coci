const longestPalindrome = function(str) {
  let resStart = -1,
    resEnd = -2;
  for (let i = 0; i < str.length; i++) {
    let start = i,
      end = i;
    let checkEven = true;
    while (str[start] === str[end] && str[start]) {
      if (str[start - 1] === str[end + 1] && str[start - 1]) {
        start--;
        end++;
        if (checkEven) checkEven = false;
      } else if (str[start] === str[end + 1] && str[start] && checkEven) {
        end++;
        checkEven = false;
      } else if (str[start - 1] === str[end] && str[end] && checkEven) {
        start--;
        checkEven = false;
      } else {
        break;
      }
    }
    if (end - start > resEnd - resStart) {
      resStart = start;
      resEnd = end;
    }
  }
  console.log(resStart, resEnd);
  return str.slice(resStart, resEnd + 1);
};

module.exports = longestPalindrome;
