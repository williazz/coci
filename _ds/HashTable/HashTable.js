const Queue = require('../Queue');

/**
 * HashTable
 * @constructor
 */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.items = 0;
    this.minSize = 11;
    this.size = size || this.minSize;
    this.loadFactor = 3 / 4;

    this.hash = this.hash.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.iterate = this.iterate.bind(this);
    this.toArray = this.toArray.bind(this);
    this.delete = this.delete.bind(this);
    this.needsResizing = this.needsResizing.bind(this);
    this.resize = this.resize.bind(this);
    this.resizeIfNeeded = this.resizeIfNeeded.bind(this);
  }

  /**
   * Creates an index within the HashTable size from any value
   * @param {*} key
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
   * @returns {*}
   */
  set(key, val, options = { resizing: false }) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) data[index] = new Queue();
    let node = data[index].find((cv, deepEqual) => deepEqual(cv.key, key));
    if (node) node.val.val = val;
    else {
      node = data[index].append({ key, val });
      if (!options.resizing) this.items++;
    }
    this.resizeIfNeeded();
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
   * Iterates over every single key value pair
   * @param {*} callback - receives the key-value pair as the
   */
  iterate(callback = () => {}) {
    const { data } = this;
    for (let i = 0; i < data.length; i++) {
      if (data[i]) data[i].iterate(callback);
    }
  }

  /**
   * Gets all of the key value pairs and writes to an array
   * @param {Function} callback - A callback to selectively choose what values to receive
   * @returns {Array}
   */
  toArray(callback = (cv) => cv) {
    const res = [];
    const { data } = this;
    for (let i = 0; i < data.length; i++) {
      if (data[i] instanceof Queue) {
        res.push(...data[i].toArray(callback));
      }
    }
    return res;
  }

  /**
   * Deletes and returns a key value pair if it exists
   * @param {*} key
   * @returns {*} - The deleted value
   */
  delete(key, options = { resizing: false }) {
    const { data } = this;
    const index = this.hash(key);
    if (!data[index]) return;
    const deleted = data[index].delete((cv) => cv.key === key);
    if (deleted) {
      if (!options.resizing) this.items--;
      this.resizeIfNeeded();
      return deleted.val;
    }
  }

  /**
   * Determines whether or not HashTable needs resizing; returns the new size or undefined
   * @returns {Number | undefined}
   */
  needsResizing() {
    const { items, size, minSize, loadFactor } = this;
    if (items / size > loadFactor) return size * 2;
    else if (size === minSize) return false;
    else if (items / size < 1 - loadFactor) return size >> 1;
  }

  /**
   * Resizes the hash table using a specific new size
   * @param {Number} size
   */
  resize() {
    const old = this.data;
    const size = this.size;
    this.data = new Array(size);
    for (let i = 0; i < old.length; i++) {
      let queue = old[i];
      if (!queue) continue;
      let cn = queue.dequeue();
      while (cn && !queue.isEmpty()) {
        const { key, val } = cn.val;
        this.set(key, val, { resizing: true });
        cn = queue.dequeue();
      }
    }
  }

  /**
   * Resizes the HashTable if needed by invoking this.needsResizing and this.resize
   */
  resizeIfNeeded() {
    const shouldResize = this.needsResizing();
    if (shouldResize) this.resize();
  }
}

module.exports = HashTable;
