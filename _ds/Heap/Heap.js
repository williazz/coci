/** Creates a Binary Heap using a comparator function
 * @class - Heap
 * @param {[Function]} - comparator(currentValue, nextValue); default comparator is (cv, next) => cv > next, resulting in a minHeap
 * */
class Heap {
  constructor(comparator = (cv, nextVal) => cv > nextVal) {
    this.comparator = comparator;
    this.data = [];
  }

  peekRoot() {
    return this.data[0];
  }

  heapify() {}
  insert() {}
  removeRoot() {}
  replaceRoot() {}
}

module.exports = Heap;
