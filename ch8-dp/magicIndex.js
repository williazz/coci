/**
 * @param {array} arr
 * @return {integer}
 */

const magicIndex = arr => {
  let m = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr[i]) return m;
    else if (i === arr[i]) m.push(i);
  }
  return m;
};

const arr = [-5, -3, 1, 2, 5];
const output = magicIndex(arr);
console.log(output);
