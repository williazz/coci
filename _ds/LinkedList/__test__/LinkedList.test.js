const LinkedList = require('../LinkedList.js');
const LLRange = require('../LLRange.js');
const _ = require('underscore');

describe('LinkedList', () => {
  describe('append', () => {
    const LL = new LinkedList();
    for (let i = 1; i < 6; i++) LL.append(i);

    it('should append number 1-5 sequentially', (done) => {
      let currentNode = LL.head;
      for (let i = 1; i < 6; i++) {
        expect(currentNode.val).toEqual(i);
        currentNode = currentNode.next;
      }
      done();
    });

    it('should have length 5', (done) => {
      expect(LL.toArray().length).toEqual(5);
      done();
    });
  });

  describe('prepend', () => {
    const LL = new LinkedList();
    for (let i = 1; i < 6; i++) LL.prepend(i);
    it('should prepend numbers 1-5 sequentially', (done) => {
      let currentNode = LL.head;
      for (let i = 5; i >= 1; i--) {
        expect(currentNode.val).toEqual(i);
        currentNode = currentNode.next;
      }
      done();
    });
    it('should have length 5', (done) => {
      expect(LL.toArray().length).toEqual(5);
      done();
    });
  });

  describe('delete', () => {
    let LL = LLRange(30);
    LL.delete(13);
    LL = LL.toArray();

    it('should delete number 13 from a list of 0-29', (done) => {
      expect(LL[13]).toEqual(14);
      done();
    });

    it('should have correct length', (done) => {
      expect(LL.length).toEqual(29);
      done();
    });
  });

  describe('find', () => {
    let LL = LLRange(30);
    it('finds an element in the LL', (done) => {
      for (let i = 0; i < 30; i += 3) {
        expect(LL.find(i)).toBeTruthy();
      }
      done();
    });
    it('does not find an element not in the LL', (done) => {
      expect(LL.find(3000)).toBeFalsy();
      done();
    });
  });

  describe('deleteHead', () => {
    let LL = new LinkedList();
    beforeEach((done) => {
      LL = LLRange(30);
      done();
    });
    it('deletes one head', (done) => {
      LL.deleteHead();
      const arr = LL.toArray();
      expect(arr[0]).toEqual(1);
      expect(arr.length).toEqual(29);
      done();
    });

    it('deletes multiple heads', (done) => {
      for (let i = 0; i < 5; i++) LL.deleteHead();
      const arr = LL.toArray();
      expect(arr[0]).toEqual(5);
      expect(arr.length).toEqual(25);
      done();
    });
  });

  describe('deleteTail', () => {
    it('deletes tail for length 1', (done) => {
      const LL = LLRange(1);
      LL.deleteTail();
      expect(LL.toString()).toBeEmpty();
      done();
    });

    it('deletes tail for length 2', (done) => {
      const LL = LLRange(2);
      LL.deleteTail();
      expect(LL.toString()).toBe('0');
      done();
    });

    it('deletes one tail for length >= 3', (done) => {
      const LL = LLRange(30);
      LL.deleteTail();
      const arr = LL.toArray();
      expect(arr[arr.length - 1]).toEqual(28);
      expect(arr.length).toEqual(29);
      done();
    });

    it('deletes multiple tails length >= 3', (done) => {
      const LL = LLRange(30);
      for (let i = 0; i < 5; i++) LL.deleteTail();
      const arr = LL.toArray();
      expect(arr[arr.length - 1]).toEqual(24);
      expect(arr.length).toEqual(25);
      done();
    });
  });

  describe('reverse', () => {
    it('should have same length', (done) => {
      const out = LLRange(30)
        .reverse()
        .toArray();
      expect(out.length).toEqual(30);
      done();
    });

    it('should have reversed list', (done) => {
      const out = LLRange(30)
        .reverse()
        .toString('');
      const ans = _.range(30)
        .reverse()
        .join('');
      expect(out).toEqual(ans);
      done();
    });
  });
});
