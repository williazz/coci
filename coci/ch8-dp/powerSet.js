// O(nlogn) time
// O(nlogn) space

const powerSetDP = arr => {
  const combs = [];
  for (let i = 0; i < arr.length; i++) {
    const len = combs.length;
    for (let k = 0; k < len; k++) {
      const nextComb = combs[k].concat(arr[i]);
      combs.push(nextComb);
    }
    combs.push(String(arr[i]));
  }
  return combs;
};

module.exports = { powerSetDP };
