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
   * Creates a key value pair, increments this.items when new pairs are created, but not updated
   * @param {*} key
   * @param {*} val
   * @returns {*}
   */
  set(key, val) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) data[index] = new LinkedList();
    let node = data[index].find((cv, deepEqual) => deepEqual(cv.key, key));
    if (node) node.val.val = val;
    else {
      node = data[index].append({ key, val });
      this.items++;
    }
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
    const gotten = data[index].find((cv, deepEqual) => deepEqual(cv.key, key));
    if (gotten) return gotten.val.val;
  }

  /**
   * Gets all of the key value pairs and writes to an array
   * @returns {Array}
   */
  toArray() {
    const res = [];
    const { data } = this;
    for (let i = 0; i < data.length; i++) {
      if (data[i]) res.push(...data[i].toArray());
    }
    return res;
  }

  /**
   * Deletes and returns a key value pair if it exists
   * @param {*} key
   * @returns {*} - The deleted value
   */
  delete(key) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) return;
    const deleted = data[index].delete((cv) => cv.key === key);
    if (deleted) {
      this.items--;
      return deleted.val;
    }
  }

  resize(size) {}

  resizeIfNeeded() {}

  getKeys() {}
}

module.exports = HashTable;
