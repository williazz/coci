/**
 * @param {array} arr
 * @return {integer}
 */

// Brute force
// O(n) time
// o(c) space

const magicIndexBF = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr[i]) return false;
    else if (i === arr[i]) return i;
  }
  return false;
};

// Recursive
// O(logn) time
// O(logn) space (implicit call stack)

const magicIndexRec = (arr = [], left = 0, right = arr.length - 1) => {
  if (left > right) return false;
  const mid = (left + right) >> 1;
  if (mid === arr[mid]) return mid;
  if (mid < arr[mid]) return magicIndexRec(arr, left, mid - 1);
  else return magicIndexRec(arr, mid + 1, right);
};

// Dynamic
// O(logn) time
// O(c) space

const magicIndexDP = arr => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (arr[mid] === mid) return mid;
    if (arr[mid] > mid) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};

const arr = [-100];
for (let i = 0; i < 100; i++) {
  const last = arr[arr.length - 1];
  const next = last + Math.random() + 10;
  arr.push(next);
}

let passes = true;
for (let i = 0; i < 100; i++) {
  let isEqual =
    magicIndexDP(arr) === magicIndexRec(arr) &&
    magicIndexDP(arr) === magicIndexBF(arr);

  if (!isEqual) {
    passes = false;
    break;
  }
}
console.log(passes);
