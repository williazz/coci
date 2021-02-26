function getLen(head) {
  let count = 0;
  let cn = head;
  while (cn) {
    cn = cn.next;
    count++;
  }
  return count;
}

function mid(len) {
  if (len % 2) {
    return Math.ceil(len / 2);
  } else {
    return len / 2;
  }
}

function reverseNextLL(head) {
  let cur = head.next;
  let prev = null;
  head.next = null;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  head.next = prev;
  return prev;
}

function isPalindrome(head) {
  if (!head || !head.next) return true;

  const len = getLen(head);
  const m = mid(len);

  let k = head;
  for (let i = 0; i < m - 1; i++) {
    k = k.next;
  }
  reverseNextLL(k);
  let h = head;
  k = k.next;
  while (k) {
    if (h.val !== k.val) return false;
    k = k.next;
    h = h.next;
  }
  return true;
}

module.exports = isPalindrome;
