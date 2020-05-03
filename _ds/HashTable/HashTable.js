const LinkedList = require('../LinkedList');

/**
 * HashTable
 * @constructor
 */
class HashTable {
  constructor(size = 32) {
    this.data = new Array(size);
    this.items = 0;
    this.size = size;
  }

  /**
   * Creates an index within the HashTable size from any value
   * @param {*} key
   */
  hash(key) {
    const str = String(key);
    const prime = 101;
    const size = this.size;
    let factor = 1;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * factor;
      factor *= prime;
    }
    return sum % size;
  }

  /**
   * Creates a key value pair
   * @param {*} key
   * @param {*} val
   * @returns {*}
   */
  set(key, val) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) data[index] = new LinkedList();
    let node = data[index].find((cv, deepEqual) => deepEqual(cv.key, key));
    if (node) node.val.val = { key, val };
    else node = data[index].append({ key, val });
    return node.val;
  }

  /**
   * Gets a value using a key as the lookup
   * @param {*} key
   */
  get(key) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) return;
    else return data[index].find(key);
  }

  delete(key) {}

  resize(size) {}

  getKeys() {}
}

module.exports = HashTable;
