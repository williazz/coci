const strStrNaive = function(hay, needle) {
  if (!needle) return 0;
  if (!hay) return -1;
  for (let i = 0; i < hay.length; i++) {
    if (hay[i] === needle[0]) {
      let k = 1,
        search = true,
        next = false;
      while (search && k < needle.length) {
        if (hay[i + k] !== needle[k]) {
          search = false;
          if (hay[i + i] === needle[0] && next === false) {
            next = i + k - 1;
          }
        }
        k++;
      }
      if (search && k === needle.length) return i;
    }
  }
  return -1;
};

const strStrOpt = (hay, needle) => {
  const kmp = kmpProcess(needle);
  for (let i = 0, k = 0; i <= hay.length; i++) {
    if (k === needle.length) return i - k;
    if (i === hay.length) return -1;
    if (hay[i] === needle[k]) {
      k++;
    } else {
      i = i - kmp[k];
      k = kmp[k];
    }
    console.log(
      `i=${i}, k=${k}, hay[i]=${hay[i]}, needle[k]=${needle[k]}, kmp[k]=${kmp[k]}`,
    );
  }
};

var kmpProcess = function(str) {
  let lps = new Array(str.length).fill(0);
  for (let i = 1, k = 0; i < str.length; i++) {
    if (str[i] === str[k]) {
      lps[i] = lps[i - 1] + 1;
      k++;
    } else if (str[i] === str[0]) {
      lps[i] = 1;
      k = 1;
    } else {
      k = 0;
    }
  }
  return lps;
};

const haystack = 'dogabaabababc';
const needle = 'ababc';

const output = strStrOpt(haystack, needle);
console.log(output);
