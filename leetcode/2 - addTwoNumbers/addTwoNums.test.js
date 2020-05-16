const addTwoNums = require('./addTwoNums');

const llToNum = (ll) => {
  let res = 0;
  let p = ll;
  while (p) {
    res += p.val;
    p = p.next;
  }
  return Number(res.toString().reverse());
};

describe('addTwoNums', () => {
  it('should add to nums of same length');
});
