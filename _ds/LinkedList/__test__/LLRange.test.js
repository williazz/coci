const LLRange = require('../LLRange.js');

describe('LLRange', () => {
  describe('only start', () => {
    it('should create range 0-9', (done) => {
      const LL = LLRange(10);
      let cn = LL.head;
      for (let i = 0; i < 10; i++) {
        expect(cn.val).toEqual(i);
        cn = cn.next;
      }
      expect(cn).toEqual(null);
      done();
    });
  });
  describe('only start and end', () => {
    it('should create range 10-19', (done) => {
      const LL = LLRange(10, 20);
      let cn = LL.head;
      for (let i = 10; i < 20; i++) {
        expect(cn.val).toEqual(i);
        cn = cn.next;
      }
      expect(cn).toEqual(null);
      done();
    });
  });
  describe('start, end, and incr', () => {
    it('should create range 10-19', (done) => {
      const LL = LLRange(-40, 20, 3);
      let cn = LL.head;
      for (let i = -40; i < 20; i += 3) {
        expect(cn.val).toEqual(i);
        cn = cn.next;
      }
      expect(cn).toEqual(null);
      done();
    });
  });
});
