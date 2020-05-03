const deepEqual = (a, b) => {
  if (typeof a !== typeof b) return false;
  if (a instanceof Object) {
    const h = Object.keys(a).sort();
    const k = Object.keys(b).sort();
    if (h.length !== k.length) return false;
    for (let i = 0; i < h.length; i++) {
      if (!deepEqual(h[i], k[i])) return false;
      if (!deepEqual(a[h[i]], b[k[i]])) return false;
    }
    return true;
  } else return a === b;
};

module.exports = deepEqual;
