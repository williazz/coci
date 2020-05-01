const Queue = require('../Queue.js');
const _ = require('underscore');

describe('Queue', () => {
  const my = new Queue();
  describe('enqueue', () => {
    it('should enqueue many items', (done) => {
      for (let i = 0; i < 10; i++) my.enqueue(i);
      const list = my.toString('');
      const ans = _.range(10).join('');
      expect(list).toEqual(ans);
      done();
    });
  });

  describe('dequeue', () => {
    it('should dequeue many items', (done) => {
      for (let i = 0; i < 3; i++) {
        const popped = my.dequeue();
        expect(popped).toEqual(i);
      }
      expect(my.toString()).toEqual(_.range(3, 10).join(''));
      done();
    });
  });

  describe('peek', () => {
    it('should peek the first item', (done) => {
      expect(my.peek()).toEqual(3);
      my.dequeue();
      expect(my.peek()).toEqual(4);
      my.fromArray([]);
      expect(my.peek()).toEqual(null);
      done();
    });
  });

  describe('isEmpty', () => {
    it('should recognize an empty queue', (done) => {
      expect(my.isEmpty()).toBeTrue();
      done();
    });

    it('should recognize a populated queue', (done) => {
      my.fromArray([1, 2, 3]);
      expect(my.isEmpty()).toBeFalse();
      done();
    });
  });
});
