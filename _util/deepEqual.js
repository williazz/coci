const deepEqual = (a, b) => {
  if (typeof a !== typeof b) return false;
  if (a instanceof Object) {
    const h = Object.keys(a);
    const k = Object.keys(b);
    if (h.length !== k.length) return false;
    h.sort();
    k.sort();
    for (let i = 0; i < h.length; i++) {
      if (!deepEqual(h[i], k[i])) return false;
      if (!deepEqual(a[h[i]], b[k[i]])) return false;
    }
    return true;
  } else return a === b;
};

module.exports = deepEqual;
