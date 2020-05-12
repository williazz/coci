/**
 * @param {string} str
 * @return {array}
 */

const permsRec = (str, n = str.length) => {
  if (n === 0) return [];
  if (n === 1) return [str[0]];
  const prev = permsRec(str, n - 1);
  const next = [];
  for (let i = 0; i < prev.length; i++) {
    const cur = prev[i];
    // if (!cur.split) debugger;
    for (let k = 0; k <= cur.length; k++) {
      const temp = cur.split('');
      temp.splice(k, 0, str[n - 1]);
      next.push(temp.join(''));
    }
  }
  console.log(next);
  return next;
};

const permsDP = str => {
  if (str.length === 0) return [];
  if (str.length === 1) return [str];
  let prev = [str[0]];
  for (let s = 1; s < str.length; s++) {
    const letter = str[s];
    const next = [];
    for (let p = 0; p < prev.length; p++) {
      const insert = prev[p];
      for (let i = 0; i <= insert.length; i++) {
        const shift = insert.split('');
        shift.splice(i, 0, letter);
        next.push(shift.join(''));
      }
    }
    console.log(next);
    prev = next;
  }
  return prev;
};

// const permsOptRec = (str, left = 0, right = str.length - 1) => {
//   if (left > right) return [];
//   if (right === left) return [str[left]];
//   const next = [];
//   const mid = (right + left) >> 1;
//   const larr = permsOptRec(str, left, mid);
//   const rarr = permsOptRec(str, mid + 1, right);
//   console.log({ larr, rarr });
//   const combine = (a, b) => {
//     for (let i = 0; i < a.length; i++) {
//       for (let k = 0; k < b.length; k++) {
//         next.push(a[i] + b[k]);
//       }
//     }
//   };
//   combine(larr, rarr);
//   combine(rarr, larr);
//   return next;
// };

const input = '1234';
const out = permsDP(input);
const mem = new Set();
const uniq = out.every(x => {
  const dup = mem.has(x);
  mem.add(x);
  return !dup;
});
const len = out.length === 4 * 3 * 2;
console.log({ uniq, len });
console.log({ out });
