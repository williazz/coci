class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  insert(val) {
    const child = new LinkedListNode(val);
    child.next = this.next;
    this.next = child;
    return this.next;
  }

  toArray() {
    const arr = [];
    let cn = this;
    while (cn) {
      arr.push(cn.val);
      cn = cn.next;
    }
    return arr;
  }

  toString(delimiter = '') {
    return this.toArray().join(delimiter);
  }
}

module.exports = LinkedListNode;
