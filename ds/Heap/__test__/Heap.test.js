const _ = require('underscore');
const faker = require('faker');
const Heap = require('../index.js');

describe('Heap', () => {
  describe('checkIntegrity', () => {
    it('should have itegrity by default', (done) => {
      const minHeap = new Heap();
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });

    it('should accept a correct heap', (done) => {
      const minHeap = new Heap();
      minHeap.data.push(..._.range(50));
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });

    it('should reject an incorrect heap', (done) => {
      const minHeap = new Heap();
      minHeap.data = [null, ..._.range(50).reverse()];
      try {
        minHeap.checkIntegrity();
        expect(true).toBeFalse();
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
      done();
    });

    it('should reject a misplaced first item', (done) => {
      const minHeap = new Heap();
      minHeap.data.push(..._.range(20));
      try {
        minHeap.checkIntegrity();
        expect(true).toBeFalse();
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
      done();
    });

    it('should reject a misplaced last item', (done) => {
      const minHeap = new Heap();
      minHeap.data.push(..._.range(20));
      minHeap[20] = -5;
      try {
        minHeap.checkIntegrity();
        expect(true).toBeFalse();
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
      done();
    });
  });

  describe('swapIfNeeded', () => {
    it('should throw error when parent is not parent of child', (done) => {
      const minHeap = new Heap();
      try {
        minHeap.swapIfNeeded(10, 10);
        expect(true).toBeFalse();
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
      done();
    });

    it('should swap misplaced items', (done) => {
      const minHeap = new Heap();
      minHeap.data = [null, 1, 0];
      const swapped = minHeap.swapIfNeeded(1, 2);
      expect(swapped).toBeTrue();
      expect(minHeap.data.join('')).toEqual('01');
      done();
    });

    it('should not swap correctly placed items', (done) => {
      const minHeap = new Heap();
      minHeap.data = [null, 0, 1];
      const swapped = minHeap.swapIfNeeded(1, 2);
      expect(swapped).toBeFalse();
      expect(minHeap.data.join('')).toEqual('01');
      done();
    });
  });

  describe('siftUp', () => {
    it('should heapify a misplaced last item', (done) => {
      const minHeap = new Heap();
      minHeap.data = [null, ..._.range(20)];
      minHeap.data[20] = 1;
      minHeap.siftUp();
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });

    it('should heapify a new min at last index', (done) => {
      const minHeap = new Heap();
      minHeap.data = [null, ..._.range(20)];
      minHeap.data[20] = -5;
      minHeap.siftUp();
      try {
        minHeap.checkIntegrity();
        expect(minHeap.root).toEqual(-5);
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('siftDown', () => {
    it('should heapify a misplaced root', (done) => {
      const data = [null, ..._.range(20)];
      data[1] = 10;
      const minHeap = new Heap();
      minHeap.data = data;
      minHeap.siftDown();
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });

    it('should heapfiy down from the specificed start index', (done) => {
      const data = [null, ..._.range(20)];
      data[10] = 50;
      const minHeap = new Heap();
      minHeap.data = data;
      minHeap.siftDown(10);
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('delete', () => {
    it('should delete a value from the heap', (done) => {
      const minHeap = new Heap();
      for (let i = 0; i < 30; i++) minHeap.insert(i);
      minHeap.delete(15);
      expect(minHeap.includes(15)).toBeFalse();
      done();
    });
    it('should return the deleted value', (done) => {
      const minHeap = new Heap();
      for (let i = 0; i < 30; i++) minHeap.insert(i);
      const res = minHeap.delete(15);
      expect(res).toEqual(15);
      done();
    });
    it('should be heapified after one delete', (done) => {
      const minHeap = new Heap();
      for (let i = 0; i < 30; i++) minHeap.insert(i);
      minHeap.delete(15);
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
    it('should be heapified after many random deletes', (done) => {
      const minHeap = new Heap();
      for (let i = 0; i < 500; i++) minHeap.insert(i);
      for (let i = 0; i < 100; i++) minHeap.delete(_.random(500));
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('insert', () => {
    it('should insert many random items', (done) => {
      const minHeap = new Heap();
      for (let i = 0; i < 10000; i++) {
        minHeap.insert(_.random(99999));
      }
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('deleteRoot', () => {
    it('should return the min from a minHeap', (done) => {
      const minHeap = new Heap();
      for (let i = 100; i > 0; i--) {
        minHeap.insert(i);
      }
      const root = minHeap.deleteRoot();
      expect(root).toEqual(1);
      done();
    });

    it('should delete the root', (done) => {
      const minHeap = new Heap();
      for (let i = 100; i > 0; i--) {
        minHeap.insert(i);
      }
      const root = minHeap.deleteRoot();
      expect(minHeap.length).toEqual(100);
      expect(minHeap.includes(root)).toBeFalse();
      done();
    });

    it('should work many times', (done) => {
      const minHeap = new Heap();
      for (let i = 0; i < 200; i++) minHeap.insert(i);
      for (let i = 0; i < 200; i++) {
        expect(minHeap.deleteRoot()).toEqual(i);
      }
      expect(minHeap.length).toEqual(1);
      done();
    });
  });

  describe('replaceRoot', () => {
    it('should remove the root', (done) => {
      const minHeap = new Heap();
      for (let i = 100; i > 0; i--) {
        minHeap.insert(i);
      }
      minHeap.replaceRoot(200);
      expect(minHeap.root).toEqual(2);
      expect(minHeap.includes(200)).toBeTrue();
      done();
    });
  });

  describe('comparator', () => {
    it('should create a max heap with many random numbers', (done) => {
      const maxHeap = new Heap((c, p) => p - c);
      for (let i = 0; i < 10000; i++) {
        maxHeap.insert(_.random(99999));
      }
      try {
        maxHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });

    it('should create a custom heap with many random strings', (done) => {
      const customHeap = new Heap((c, p) => p.length - c.length);
      for (let i = 0; i < 10000; i++) {
        customHeap.insert(faker.lorem.words(_.random(0, 50)));
      }
      try {
        customHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('fromArray', () => {
    it('should build from many values', (done) => {
      const minHeap = new Heap().fromArray(_.range(200));
      try {
        minHeap.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });
  });

  describe('merge', () => {
    const h1 = new Heap().fromArray(_.range(200));
    const h2 = new Heap().fromArray(_.range(300, 500));
    const merge = h1.merge(h2);
    it('should be heapified', (done) => {
      try {
        merge.checkIntegrity();
      } catch (err) {
        expect(err).toBeUndefined();
      }
      done();
    });

    it('should be lossless', (done) => {
      expect(merge.length).toEqual(401);
      done();
    });

    it('should preserve the previous two heaps', (done) => {
      expect(h1.length).toEqual(201);
      expect(h2.length).toEqual(201);
      done();
    });

    it('should return a new heap', (done) => {
      expect(merge).not.toBe(h1);
      expect(merge).not.toBe(h2);
      done();
    });
  });

  describe('meld', () => {});
});
