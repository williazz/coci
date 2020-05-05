const LinkedList = require('../LinkedList');
const LinkedListNode = require('../LinkedList/LinkedListNode.js');

class Queue extends LinkedList {
  constructor() {
    super();
  }

  /**
   * Adds a new task to the end of the queue
   * @param {*} val
   * @returns {Queue}
   */
  enqueue(val) {
    this.append(val);
    return this;
  }

  /**
   * Serves the first item in queue
   * @returns {*}
   */
  dequeue() {
    const popped = this.deleteHead();
    if (popped instanceof LinkedListNode) return popped.val;
  }

  /**
   * Checks if queue is empty
   * @returns {Boolean}
   */
  isEmpty() {
    return !this.head;
  }

  /**
   * Gets the first item without dequeueing it
   * @returns {*}
   */
  peek() {
    const head = this.head;
    if (head instanceof Object && head.hasOwnProperty('val')) return head.val;
    else return null;
  }
}

module.exports = Queue;
