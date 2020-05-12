const LLRange = (start, end, interval = 1) => {
  const ListNode = val => ({ val, next: null });
  let res = (cur = { next: null });
  for (let i = start; i < end; i += interval) {
    cur.next = ListNode(i);
    cur = cur.next;
  }
  return res.next;
};

var mergeKLists = function(lists) {
  if (!lists.length) return lists;
  var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let res = (cur = { next: l1 });
    while (l1 && l2) {
      if (l1.val < l2.val) {
        l1 = l1.next;
      } else {
        let temp = l2.next;
        cur.next = l2;
        l2.next = l1;
        l2 = temp;
      }
      cur = cur.next;
    }
    cur.next = l1 || l2;
    return res.next;
  };

  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; i < lists.length - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + 1]);
      debugger;
    }
    interval = interval * 2;
  }
  return lists[0];
};

const input = [LLRange(0, 10), LLRange(5, 20, 2), LLRange(16, 30, 3)];
const output = mergeKLists(input);
console.log(output);
