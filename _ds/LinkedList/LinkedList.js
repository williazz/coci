const Node = (val, next = null) => ({ val, next });

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    const node = Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  prepend(val) {
    const node = Node(val);
    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  delete() {}

  find() {}
  deleteHead() {}
  deleteTail() {}
  fromArray() {}
  toArray() {}
  toString() {}
  reverse() {}
}

module.exports = LinkedList;
