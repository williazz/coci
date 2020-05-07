/** Creates a Binary Heap using a comparator function
 * @class - Implementation of the Heap data structure. It defaults as a MinHeap
 * @param {Function} [comparator=(child, parent) => child - parent] - Determines whether or not two values should be swapped. Must return a number
 * */
class Heap {
  constructor(comparator = (c, p) => c - p) {
    /**@property {Function} - The passeed in parameter */
    this.comparator = comparator;
    /**@property {Function} - Storage for the heap values */
    this.data = [null];
    this.swapIfNeeded = this.swapIfNeeded.bind(this);
    this.siftDown = this.siftDown.bind(this);
    this.siftUp = this.siftUp.bind(this);
  }

  /**
   * Peeks at the root without affecting the heap
   * @returns {*} - Root value
   */
  get root() {
    return this.data[1];
  }

  /**
   * Throws an error if heap is not organized correctly
   */
  checkIntegrity() {
    const { data, comparator, length } = this;
    for (let p = length - 1; p > 1; p--) {
      const c = p >> 1;
      const shouldSwap = comparator(data[c], data[p]) > 0;
      if (shouldSwap) {
        throw new Error(
          `Heap.checkIntegrity 
            \t Child at index: ${c}, val: ${data[c]}
            \t Parent at index: ${p}, val: ${data[p]}
            \t Comparator says shouldSwap: ${shouldSwap}`,
        );
      }
    }
    if (data[0] !== null) {
      throw new Error(
        `Heap.checkIntegrity 
          \t Val at data[0]
          \t Expected: null
          \t Received: ${data[0]}`,
      );
    }
  }

  /**
   * Swaps two values at two indeces if needed
   * @param {Number} child - Index of child
   * @param {Number} parent - Index of parent
   * @returns {Boolean} - Indicates whether or not parent and child were swapped
   */
  swapIfNeeded(c, p) {
    const { data, comparator } = this;
    if (c >= p || p >> 1 !== c || c === p)
      throw new Error(
        'Heap.swapIfNeeded: arguments must have parent-child relationship!',
      );
    if (data.length <= c || data.length <= p || c === 0) return false;
    if (comparator(data[c], data[p]) > 0) {
      [data[c], data[p]] = [data[p], data[c]];
      return true;
    } else return false;
  }

  /**
   * Heapifies the last val into the right place
   */
  siftUp() {
    const { swapIfNeeded, length } = this;
    let p = length - 1;
    while (p > 1) {
      const c = p >> 1;
      if (swapIfNeeded(c, p)) p = c;
      else return;
    }
  }

  /**
   * Pushes a value into the heap and calls siftUp
   * @param {*} val - Any value that can be compared by Heap.comparator
   */
  insert(val) {
    const { data } = this;
    data.push(val);
    this.siftUp();
  }

  /**
   * Heapifies down from a specific index
   * @param {Number} [parent = 1] - Parent index to start from; must be >= 1
   */
  siftDown(start = 1) {
    if (start < 1) return;
    const jobs = [start];
    while (jobs.length) {
      let p = jobs.pop();
      const { data, comparator, swapIfNeeded, length } = this;
      while (length >> 1 >= p) {
        const c1 = p * 2;
        const c2 = c1 + 1;
        const next = comparator(data[c1], data[c2]) > 0 ? c2 : c1;
        if (swapIfNeeded(p, next)) p = next;
        else break;
      }
      if (p > 1) jobs.push(p >> 1);
    }
  }

  /**
   * Removes the last occurence of a value from the heap; and heapifies
   * @param {*} val
   * @returns {*} deleted value after successful deletion; else returns undefined
   */
  delete(val) {
    const { length, data } = this;
    for (let i = length - 1; i > 0; i--) {
      if (val === data[i]) {
        data[i] = data.pop();
        this.siftDown(i);
        return val;
      }
    }
  }

  /**
   * Deletes root and heapifies, returning the deleted root
   * @returns {*} - The deleted root
   */
  deleteRoot() {
    const { data, root, length } = this;
    if (length === 1) return;
    if (length === 2) return data.pop();
    else {
      data[1] = data.pop();
      this.siftDown();
      return root;
    }
  }

  /**
   * Replaces root and heapifies, returning the deleted root
   * @param {*} - val to replace the root
   * @returns {*} - The deleted root
   */
  replaceRoot(val) {
    const { data, root } = this;
    data[1] = val;
    this.siftDown();
    return root;
  }

  /**
   * Returns the number of items
   */
  get length() {
    return this.data.length;
  }

  /**
   * @param {*} val
   * @returns {Boolean}
   */
  includes(val) {
    return this.data.includes(val);
  }

  /**
   * Heapifies the values
   */
  heapify() {
    const { swapIfNeeded, siftDown, data, length, comparator } = this;
    for (let p = length - 1; p > 0; p--) {
      const c1 = p * 2;
      const c2 = c1 + 1;
      const next = comparator(data[c1], data[c2]) > 0 ? c2 : c1;
      if (swapIfNeeded(p, next)) siftDown(next);
    }
  }

  /**
   * Builds a heap from an array of values
   * @param {*} vals
   */
  fromArray(vals = []) {
    this.data = [null, ...vals];
    this.heapify();
    return this;
  }

  /**
   * Merges this heap with another while preserving both original heaps. The new heap uses this heap's constructor
   * @param {Heap} heap
   * @return {Heap}
   */
  merge(heap = new Heap()) {
    const { comparator, data } = this;
    const data2 = heap.data;
    const merge = new Heap(comparator);
    merge.data = [null, ...data, ...data2];
    merge.heapify();
    return merge;
  }

  meld() {}
}

module.exports = Heap;
