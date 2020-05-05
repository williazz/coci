/** Creates a Binary Heap using a comparator function
 * @class - Heap, defaults as a MinHeap
 * @param {Function} [comparator=(childVal, parentVal)] => childVal - parentVal] - determines whether or not two values should be swapped. Must return a number
 * */
class Heap {
  constructor(comparator = (c, p) => c - p) {
    this.comparator = comparator;
    this.data = [null];
    this.swapIfNeeded = this.swapIfNeeded.bind(this);
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
  heapifyUp() {
    const { swapIfNeeded, length } = this;
    let p = length - 1;
    while (p > 1) {
      const c = p >> 1;
      if (swapIfNeeded(c, p)) p = c;
      else return;
    }
  }

  /**
   * Pushes a value into the heap and calls heapifyUp
   * @param {*} val - Any value that can be compared by Heap.comparator
   */
  insert(val) {
    const { data } = this;
    data.push(val);
    this.heapifyUp();
  }

  /**
   * Heapifies down from a specific index
   * @param {Number} [parent = 1] - Parent index to start from; must be >= 1
   */
  heapifyDown(start = 1) {
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
        this.heapifyDown(i);
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
      this.heapifyDown();
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
    this.heapifyDown();
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
}

module.exports = Heap;
