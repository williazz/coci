module.exports = function buildLL(arr) {
  const dummy = { next: null };
  let cn = dummy;
  for (let i = 0; i < arr.length; i++) {
    const node = { val: arr[i], next: null };
    cn.next = node;
    cn = cn.next;
  }
  return dummy.next;
};
