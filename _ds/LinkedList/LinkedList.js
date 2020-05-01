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
    return this;
  }

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

  find(val) {
    let cn = this.head;
    while (cn) {
      if (cn.val === val) return cn;
      cn = cn.next;
    }
  }

  deleteHead() {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else if (this.head) {
      this.head = this.head.next;
    }
    return this;
  }

  deleteTail() {
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
    return this;
  }

  fromArray(values = []) {
    this.tail = this.head = null;
    for (let i = 0; i < values.length; i++) this.append(values[i]);
    return this;
  }

  toArray() {
    const arr = [];
    let cn = this.head;
    while (cn) {
      arr.push(cn.val);
      cn = cn.next;
    }
    return arr;
  }

  toString(delimiter = ',') {
    return this.toArray().join(delimiter);
  }

  length() {
    return this.toArray().length;
  }

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
}

module.exports = LinkedList;
