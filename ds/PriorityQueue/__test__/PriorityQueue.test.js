const PriorityQueue = require('../index.js');
const _ = require('underscore');

describe('PriorityQueue', () => {
  const pq = new PriorityQueue();
  for (let i = 0; i < 100; i++) pq.add(i, _.random(100));
  describe('add', () => {
    it('should add many random items', (done) => {
      expect(pq.heap.length).toEqual(101);
      done();
    });

    it('should have an organized heap', (done) => {
      try {
        pq.heap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('pull', () => {
    it('should pull every node in order', (done) => {
      let prev = pq.pull();
      for (let i = 0; i < 99; i++) {
        const next = pq.pull();
        expect(prev).toBeLessThanOrEqual(next);
      }
      expect(pq.heap.length).toEqual(1);
      done();
    });
  });
});
