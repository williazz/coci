const LLRange = require('../../_ds/LLRange.js');

const reverseLL = (head, count) => {
  let prev = null;
  while (head) {
    let tmp = head.next;
    head.next = prev.next;
    prev = head;
    head = tmp;
  }

  return prev;
};
