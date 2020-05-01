const _ = require('underscore');
const Node = (val, next = null) => ({ val, next });

/**
 * LinkedList
 * @constructor
 */
class LinkedList {
  constructor() {
    /**@property {LLNode} */
    this.head = null;

    /**@property {LLNode} */
    this.tail = null;

    // /**@property {Number} */
    // this.length = 0;
  }

  /**
   * Appends a node to end of LL
   * @param {*} val
   * @return {LinkedList}
   */

  append(val) {
    const node = Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    return this;
  }

  /**
   * Prepends a node to beginning of LL
   * @param {*} val
   * @returns {LinkedList}
   */

  prepend(val) {
    const node = Node(val);
    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  /**
   * Deletes a node with specific val from LL
   * @param {*} val
   * @returns {LinkedList}
   */

  delete(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
    } else {
      let cn = this.head;
      while (cn) {
        if (cn.next && cn.next.val === val) {
          cn.next = cn.next.next;
          break;
        }
        cn = cn.next;
      }
    }
    return this;
  }

  /**
   * Finds a node with specific val from LL
   * @param {*} val
   * @returns {LLNode}
   */

  find(val) {
    let cn = this.head;
    while (cn) {
      if (cn.val === val) return cn;
      cn = cn.next;
    }
  }

  /**
   * Removes the head from a LL
   * @returns {LinkedList}
   */
  deleteHead() {
    const popped = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else if (this.head) {
      this.head = this.head.next;
    }
    return popped;
  }

  /**
   * Removes the tail from a LL
   * @returns {LinkedList}
   */

  deleteTail() {
    const popped = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else if (this.head.next === this.tail) {
      this.head.next = null;
      this.tail = this.head;
    } else {
      let cn = this.head;
      while (cn.next.next) cn = cn.next;
      cn.next = null;
      this.tail = cn;
    }
    return popped;
  }

  /**
   * Builds LL from array of values
   * @param {Array} values
   * @returns {LinkedList}
   */

  fromArray(values = []) {
    this.tail = this.head = null;
    for (let i = 0; i < values.length; i++) this.append(values[i]);
    return this;
  }

  /**
   * Builds an array from LL
   * @returns {Array}
   */

  toArray() {
    const arr = [];
    let cn = this.head;
    while (cn) {
      arr.push(cn.val);
      cn = cn.next;
    }
    return arr;
  }

  /**
   * Builds a string from LL with a delimiter
   * @param {*} delimiter
   * @returns {Array}
   */

  toString(delimiter = '') {
    return this.toArray().join(delimiter);
  }

  /**
   * Computes length of LL
   * @returns {Number}
   */
  length() {
    let cn = this.head;
    let count = 0;
    while (cn) {
      cn = cn.next;
      count++;
    }
    return count;
  }

  /**
   * Reverses a LL
   * @returns {LinkedList}
   */

  reverse() {
    let head = this.head;
    let tail = null;
    let prev = null;
    this.head = this.tail = null;
    while (head) {
      if (!head.next) tail = head;
      let tmp = head.next;
      head.next = prev;
      prev = head;
      head = tmp;
    }
    this.head = prev;
    this.tail = tail;
    return this;
  }

  /**
   * Creates a LinkedList range, mapping directly to underscore.js's _.range method
   * @param {Number} start
   * @param {Number} [end]
   * @param {Number} [incr]
   */
  range(start, end, incr) {
    const range = _.range(start, end, incr);
    this.fromArray(range);
    return this;
  }
}

module.exports = LinkedList;
