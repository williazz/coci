const Heap = require('../Heap');
const PQNode = require('./PQNode.js');

/**
 * Priority Queue
 * @class */
class PriorityQueue {
  constructor(comparator = (p, c) => p.priority - c.priority) {
    this.heap = new Heap(comparator);
  }

  /**
   * Adds an item to queue
   * @param {*} item
   * @param {*} priority
   */
  add(item, priority) {
    const { heap } = this;
    const node = new PQNode(item, priority);
    heap.insert(node);
  }

  /**
   * Returns and deletes root from the heap
   * @returns {*}
   */
  pull() {
    const { heap } = this;
    const res = heap.deleteRoot();
    if (res) return res.val;
  }

  remove(item) {}

  changePriority(item, priority) {}
}

module.exports = PriorityQueue;
