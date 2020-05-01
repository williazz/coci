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

  delete(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
    } else {
      let cn = this.head;
      while (cn) {
        if (cn.next && cn.next.val === val) {
          cn.next = cn.next.next;
          return;
        }
        cn = cn.next;
      }
    }
  }

  find() {}
  deleteHead() {}
  deleteTail() {}
  fromArray() {}
  toArray() {}
  toString() {}
  reverse() {}
}

module.exports = LinkedList;
