const MinHeap = require('../Heaps/BinaryHeap');
const PQNode = require('./PQNode.js');

/**
 * Priority Queue
 * @class */
class PriorityQueue {
  constructor(
    comparator = (child, parent) => child.priority - parent.priority,
  ) {
    this.comparator = comparator;
    this.heap = new MinHeap(comparator);
  }

  /**
   * Adds an item to queue
   * @param {*} item
   * @param {*} priority
   */
  add(val, priority) {
    const { heap } = this;
    const node = PQNode(val, priority);
    heap.insert(node);
  }

  /**
   * Returns and deletes root from the heap
   * @returns {*}
   */
  extractMin() {
    const { heap } = this;
    const res = heap.deleteRoot();
    if (res) return res.val;
  }

  decreaseKey() {}

  remove(item) {}

  meld() {}

  peekMin() {}
}

module.exports = PriorityQueue;
