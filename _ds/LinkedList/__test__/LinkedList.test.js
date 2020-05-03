const LinkedList = require('../LinkedList.js');
const LinkedListNode = require('../LinkedListNode.js');
const _ = require('underscore');
const deepEqual = require('../../../_util/deepEqual.js');

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

    it('should return a LinkedListNode', (done) => {
      expect(LL.append(0) instanceof LinkedListNode).toBeTrue();
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
    let LL = new LinkedList().range(30);
    LL.delete(13);
    const arr = LL.toArray();

    it('should delete number 13 from a list of 0-29', (done) => {
      expect(arr[13]).toEqual(14);
      done();
    });

    it('should have correct length', (done) => {
      expect(arr.length).toEqual(29);
      done();
    });

    it('should have callback pass deepEqual as the second arg', (done) => {
      LL.delete((curVal, cb) => {
        expect(cb).toBe(deepEqual);
        done();
      });
    });

    it('should return the deleted node', (done) => {
      const key = 'key';
      LL.append({ key });
      const deleted = LL.delete((cv, deepEqual) => deepEqual(cv.key, key));
      expect(deleted.val.key).toEqual(key);
      done();
    });
  });

  describe('find', () => {
    let LL = new LinkedList().range(30);
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

    it('should accept a comparator callback', (done) => {
      const cb = (cv) => cv === 10;
      const find = LL.find(cb);
      expect(find.val).toEqual(10);
      done();
    });

    it('should return a LinkedListNode only after a successful search', (done) => {
      expect(LL.find(3) instanceof LinkedListNode).toBeTrue();
      expect(LL.find(-5) instanceof LinkedListNode).toBeFalse();
      done();
    });

    it('should have callback pass deepEqual as the second arg', (done) => {
      LL.find((curVal, cb) => {
        expect(cb).toEqual(deepEqual);
        done();
      });
    });
  });

  describe('deleteHead', () => {
    let LL = new LinkedList();
    beforeEach((done) => {
      LL = new LinkedList().range(30);
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
      const LL = new LinkedList().range(1);
      LL.deleteTail();
      expect(LL.toString()).toBeEmpty();
      done();
    });

    it('deletes tail for length 2', (done) => {
      const LL = new LinkedList().range(2);
      LL.deleteTail();
      expect(LL.toString()).toBe('0');
      done();
    });

    it('deletes one tail for length >= 3', (done) => {
      const LL = new LinkedList().range(30);
      LL.deleteTail();
      const arr = LL.toArray();
      expect(arr[arr.length - 1]).toEqual(28);
      expect(arr.length).toEqual(29);
      done();
    });

    it('deletes multiple tails length >= 3', (done) => {
      const LL = new LinkedList().range(30);
      for (let i = 0; i < 5; i++) LL.deleteTail();
      const arr = LL.toArray();
      expect(arr[arr.length - 1]).toEqual(24);
      expect(arr.length).toEqual(25);
      done();
    });
  });

  describe('fromArray', () => {
    it('should build a list with numbers 0-4', (done) => {
      const my = new LinkedList().fromArray(_.range(5));
      expect(my.toString()).toEqual(_.range(5).join(''));
      done();
    });
  });

  describe('reverse', () => {
    it('should have same length', (done) => {
      const out = new LinkedList()
        .range(30)
        .reverse()
        .toArray();
      expect(out.length).toEqual(30);
      done();
    });

    it('should have reversed list', (done) => {
      const out = new LinkedList()
        .range(30)
        .reverse()
        .toString('');
      const ans = _.range(30)
        .reverse()
        .join('');
      expect(out).toEqual(ans);
      done();
    });
  });

  describe('range', () => {
    describe('only start', () => {
      it('should create range 0-9', (done) => {
        const LL = new LinkedList().range(10);
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
        const LL = new LinkedList().range(10, 20);
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
        const LL = new LinkedList().range(-40, 20, 3);
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
});
