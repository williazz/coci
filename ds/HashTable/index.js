const LinkedList = require('../LinkedList');

/**
 * HashTable
 * @class
 */
class HashTable {
  constructor(size) {
    /**@property {Array} */
    this.data = new Array(size);

    /**@property {Number} */
    this.items = 0;

    /**@property {Number} */
    this.minSize = 11;

    /**@property {Number} */
    this.size = size || this.minSize;

    /**@property {Number} */
    this.loadFactor = 3 / 4;
  }

  /**
   * Creates an index within the HashTable size from any value
   * @param {*} key
   * @returns {Number}
   */
  hash(key) {
    const str = String(key);
    const size = this.size;
    const prime = 101;
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
   * @returns {*} - The set key/val pair
   */
  set(key, val, options = { resizing: false }) {
    const { data } = this;
    const { resizing } = options;
    const index = this.hash(key);
    if (!data[index]) data[index] = new LinkedList();
    let node = data[index].find((cv, deepEqual) => deepEqual(cv.key, key));
    if (node) node.val.val = val;
    else {
      node = data[index].append({ key, val });
      if (!resizing) {
        this.items++;
        this.resizeIfNeeded();
      }
    }
    return node.val;
  }

  /**
   * Gets a value using a key as the lookup
   * @param {*} key
   * @returns {*} the key/val pair | undefined
   */
  get(key) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) return;
    const gotten = data[index].find((cv, deepEqual) => deepEqual(cv.key, key));
    if (gotten) return gotten.val.val;
  }

  /**
   * Iterates over every single key value pair
   * @param {*} callback - receives the key-value pair as the
   */
  iterate(callback = () => {}) {
    const { data } = this;
    for (let i = 0; i < data.length; i++) {
      if (data[i] instanceof LinkedList) data[i].iterate(callback);
    }
  }

  /**
   * Gets all of the key value pairs and writes to an array
   * @param {Function} [map=(cv)=>cv]
   * @returns {Array}
   */
  toArray(map = (cv) => cv) {
    const res = [];
    const { data } = this;
    for (let i = 0; i < data.length; i++) {
      if (data[i] instanceof LinkedList) {
        res.push(...data[i].toArray(map));
      }
    }
    return res;
  }

  /**
   * Deletes and returns a key value pair if it exists
   * @param {*} key
   * @returns {*} - The deleted value | undefined
   */
  delete(key) {
    const { data } = this;
    const index = this.hash(key);
    if (!(data[index] instanceof LinkedList)) return;
    const deleted = data[index].delete((cv) => cv.key === key);
    if (deleted) {
      this.items--;
      this.resizeIfNeeded();
      return deleted.val;
    }
  }

  /**
   * Determines whether or not HashTable needs resizing; returns the new size or undefined
   * @returns {Number | false}
   */
  needsResizing() {
    const { items, size, minSize, loadFactor } = this;
    if (items / size >= loadFactor) return size * 2;
    else if (items / size <= 1 - loadFactor) {
      if (size === minSize) return false;
      else return size >> 1;
    }
  }

  /**
   * Resizes the hash table using a specific new size
   * @param {Number} size
   */
  resize(size) {
    const old = this.data;
    this.size = size;
    this.data = new Array(size);
    for (let i = 0; i < old.length; i++) {
      const LL = old[i];
      if (!(LL instanceof LinkedList)) continue;
      LL.iterate(({ key, val }) => this.set(key, val, { resizing: true }), {
        deleteAfter: true,
      });
    }
  }

  /**
   * Resizes the HashTable if needed
   */
  resizeIfNeeded() {
    const size = this.needsResizing();
    if (!size) return;
    this.resize(size);
  }
}

module.exports = HashTable;
