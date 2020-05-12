const defaultOptions = {
  showErrors: false,
};

const deepEqual = (a, b, options = defaultOptions) => {
  if (typeof a !== typeof b) {
    if (options.showErrors) {
      console.error(`deepEqual type error: ${a}, ${b}`);
    }
    return false;
  }
  if (a instanceof Object) {
    const h = Object.keys(a);
    const k = Object.keys(b);
    if (h.length !== k.length) {
      if (options.showErrors)
        console.error(`deepEqual unequal number of keys: ${a}, ${b}`);
      return false;
    }
    h.sort();
    k.sort();
    for (let i = 0; i < h.length; i++) {
      if (!deepEqual(h[i], k[i])) {
        if (options.showErrors) console.error(`deepEqual error: ${a}, ${b}`);
        return false;
      }
      if (!deepEqual(a[h[i]], b[k[i]])) {
        if (options.showErrors) console.error(`deepEqual error: ${a}, ${b}`);
        return false;
      }
    }
    return true;
  } else return a === b;
};

module.exports = deepEqual;
