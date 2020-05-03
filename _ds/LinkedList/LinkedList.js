const _ = require('underscore');
const LinkedListNode = require('./LinkedListNode.js');
const deepEqual = require('../../_util/deepEqual.js');

/**
 * LinkedList
 * @constructor
 */
class LinkedList {
  constructor() {
    /**@property {LinkedListNode} */
    this.head = null;

    /**@property {LinkedListNode} */
    this.tail = null;

    // /**@property {Number} */
    // this.length = 0;
  }

  /**
   * Appends a node to end of LL
   * @param {*} val
   * @return {LinkedListNode}
   */
  append(val) {
    const node = new LinkedListNode(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    return node;
  }

  /**
   * Prepends a node to beginning of LL
   * @param {*} val
   * @returns {LinkedListNode}
   */
  prepend(val) {
    const node = new LinkedListNode(val);
    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  /**
   * Deletes a node with specific val from LL
   * @param {*} query - query either is the value to be searched for; OR, it can be a callback that receives two parameters: query(currentValue, deepEqual), where deepEqual is a function that performs a deep equality check
   * @returns {LinkedListNode}
   */
  delete(query) {
    const comparator = (cv) => {
      if (query instanceof Function) return query(cv, deepEqual);
      else return deepEqual(cv, query);
    };

    if (comparator(this.head.val)) {
      const deleted = this.head;
      this.head = this.head.next;
      return deleted;
    } else {
      let cn = this.head;
      while (cn) {
        if (cn.next && comparator(cn.next.val)) {
          const deleted = cn.next;
          cn.next = cn.next.next;
          return deleted;
        }
        cn = cn.next;
      }
    }
  }

  /**
   * Finds a node with specific val from LL
   * @param {*} query - query either is the value to be searched for; OR, it can be a callback that receives two parameters: query(currentValue, deepEqual), where deepEqual is a function that performs a deep equality check
   * @returns {LinkedListNode}
   */
  find(query) {
    const comparator = (cv) => {
      if (query instanceof Function) return query(cv, deepEqual);
      else return deepEqual(cv, query);
    };

    let cn = this.head;
    while (cn) {
      if (comparator(cn.val)) return cn;
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
  toArray(callback = (cv) => cv) {
    const arr = [];
    let cn = this.head;
    while (cn) {
      const val = callback(cn.val);
      arr.push(val);
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

  /**
   * Iterates thru the entire LinkedList
   * @param {*} callback
   */
  iterate(callback = () => {}) {
    let cn = this.head;
    while (cn) {
      callback(cn.val);
      cn = cn.next;
    }
  }
}

module.exports = LinkedList;
