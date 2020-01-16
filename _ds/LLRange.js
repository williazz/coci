const LLRange = (start, end, interval = 1) => {
  const ListNode = val => ({ val, next: null });
  let res = (cur = { next: null });
  for (let i = start; i < end; i += interval) {
    cur.next = ListNode(i);
    cur = cur.next;
  }
  return res.next;
};

module.exports = LLRange;
