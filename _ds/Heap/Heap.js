/** Creates a Binary Heap using a comparator function
 * @class - Heap, defaults as a MinHeap
 * @param {Function} [comparator=(childVal, parentVal)] => childVal - parentVal] - determines whether or not two values should be swapped. Must return a number
 * */
class Heap {
  constructor(comparator = (c, p) => c - p) {
    this.comparator = comparator;
    this.data = [];
    this.swapIfNeeded = this.swapIfNeeded.bind(this);
  }

  /**
   * Peeks at the root without affecting the heap
   * @returns {*} - Root value
   */
  get root() {
    return this.data[0];
  }

  /**
   * Throws an error if heap is not organized correctly
   */
  checkIntegrity() {
    const { data, comparator } = this;
    for (let p = data.length - 1; p > 0; p--) {
      const c = p >> 1;
      const shouldSwap = comparator(data[c], data[p]) > 0;
      if (shouldSwap) {
        throw new Error(
          `Heap.checkIntegrity 
            Child at index: ${c}, val: ${data[c]}
            Parent at index: ${p}, val: ${data[p]}
            Comparator says shouldSwap: ${shouldSwap}`,
        );
      }
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
    if (c >= p || p >> 1 !== c)
      throw new Error(
        'Heap.swapIfNeeded: arguments must have parent-child relationship!',
      );
    if (data.length <= c || data.length <= p) return false;
    if (comparator(data[c], data[p]) > 0) {
      [data[c], data[p]] = [data[p], data[c]];
      return true;
    } else return false;
  }

  /**
   * Heapifies the last val into the right place
   */
  heapifyUp() {
    const { data, swapIfNeeded } = this;
    let p = data.length - 1;
    while (p > 0) {
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
   * Heapifies the root into the correct place
   * @param {Number} [start = 0] - Index at which to start heapifying down from
   */
  heapifyDown(start = 0) {
    const { data, comparator, swapIfNeeded } = this;
    let c = start;
    while (data.length >> 1 >= c) {
      const p1 = c * 2;
      const p2 = p1 + 1;
      const next = comparator(data[p1], data[p2]) > 0 ? p2 : p1;
      if (swapIfNeeded(c, next)) c = next;
      else return;
    }
  }

  /**
   * Removes the last occurence of a value from the heap; and heapifies
   * @param {*} val
   * @returns {*} deleted value after successful deletion; else returns undefined
   */
  delete(val) {
    const { length, data } = this;
    for (let i = length - 1; i >= 0; i--) {
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
    const data = this.data;
    const root = data[0];
    data[0] = data.pop();
    this.heapifyDown();
    return root;
  }

  /**
   * Replaces root and heapifies, returning the deleted root
   * @param {*} - val to replace the root
   * @returns {*} - The deleted root
   */
  replaceRoot(val) {
    const data = this.data;
    const root = data[0];
    data[0] = val;
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
