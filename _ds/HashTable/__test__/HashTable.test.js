const HashTable = require('../HashTable.js');
const _util = require('../../../_util');
const _ = require('underscore');

describe('HashTable', () => {
  let HT;
  beforeEach((done) => {
    HT = new HashTable();
    done();
  });
  describe('hash', () => {
    it('should be within the limit', (done) => {
      expect(HT.hash(235235)).toBeLessThan(HT.size);
      expect(HT.hash('asdf345artrhrf39??>')).toBeLessThan(HT.size);
      expect(HT.hash({ isThisAnObject: 'why yes it is' })).toBeLessThan(
        HT.size,
      );
      expect(
        HT.hash(() => {
          return;
        }),
      ).toBeLessThan(HT.size);
      done();
    });
  });

  describe('set', () => {
    it('should set strings and numbers', (done) => {
      const pair = HT.set('key', 'val');
      const ans = { key: 'key', val: 'val' };
      expect(_util.deepEqual(pair, ans)).toBeTrue();
      done();
    });

    it('should update preexisting key value pairs', (done) => {
      const pair = HT.set('key', 'val');
      const newVal = 'newVal';
      HT.set('key', newVal);
      expect(pair.val).toBe(newVal);
      done();
    });

    it('should only increment HT.items when a new pari is created', (done) => {
      expect(HT.items).toEqual(0);
      HT.set('key', 'val');
      expect(HT.items).toEqual(1);
      _.range(3).forEach((i) => HT.set(i, 'anotha one'));
      expect(HT.items).toEqual(4);
      _.range(3).forEach((i) => HT.set(i, 'anotha one'));
      expect(HT.items).toEqual(4);
      done();
    });
  });

  describe('get', () => {
    it('should only find key value string pairs that exist', (done) => {
      const key = 'dogs';
      const val = 'are better than cats';
      HT.set(key, val);
      expect(HT.get(key)).toEqual(val);
      expect(HT.get('hocus pocus')).toBeUndefined();
      done();
    });

    it('should work with objects', (done) => {
      const key = { keyAsAnObject: true };
      const val = { hello: 'there' };
      HT.set(key, val);
      expect(HT.get(key)).toEqual(val);
      expect(HT.get('hocus pocus')).toBeUndefined();
      done();
    });
  });

  describe('toArray', () => {
    it('should have length match items', (done) => {
      const HT = new HashTable();
      for (let i = 0; i < 10; i++) HT.set(i, i);
      const arr = HT.toArray();
      debugger;
      expect(arr.length).toEqual(HT.items);
      done();
    });
    // it('should get everything from the hash table', (done) => {
    //   for (let i = 0; i < 100; i++) HT.set(i, i);
    //   const arr = HT.toArray()
    //     .map((x) => x.key)
    //     .sort((a, b) => a - b);
    //   expect(_util.deepEqual(arr, _.range(100))).toBeTrue();
    //   done();
    // });
  });

  describe('delete', () => {
    it('should delete stuff', (done) => {
      for (let i = 0; i < 5; i++) HT.set(i, 'some things');
      for (let i = 0; i < 3; i++) HT.delete(i);
      const arr = HT.toArray()
        .map((x) => x.key)
        .sort((a, b) => a - b)
        .join('');
      expect(arr).toEqual('34');
      done();
    });

    it('should return the deleted value', (done) => {
      HT.set(1, 1);
      const del = HT.delete(1);
      expect(del).toBeTruthy();
      expect(del.key).toEqual(1);
      expect(del.val).toEqual(1);
      done();
    });

    it('should reduce items', (done) => {
      for (let i = 0; i < 5; i++) HT.set(i, 'some things');
      for (let i = 0; i < 3; i++) HT.delete(i);
      expect(HT.items).toEqual(2);
      done();
    });
  });

  describe('iterate', () => {
    it('should iterate over every value', (done) => {
      for (let i = 0; i < 50; i++) HT.set(i, i);
      const mem = [];
      HT.iterate((cv) => {
        expect(mem[cv.val]).toBeUndefined();
        mem[cv.val] = cv.val;
        expect(mem[cv.val]).toEqual(cv.val);
      });
      expect(mem.join('')).toEqual(_.range(50).join(''));
      done();
    });
  });

  describe('needsResizing', () => {
    it('should need resizing when load factor is exceeded', (done) => {
      const HT = new HashTable();
      HT.items = 10;
      const needsResizing = HT.needsResizing();
      expect(needsResizing).toBeTrue();
      expect(HT.size).toEqual(22);
      done();
    });

    it('should need resizing when load factor is exceeded many times', (done) => {
      const HT = new HashTable();
      let size = 11;
      done();
    });
  });

  describe('resize', () => {
    it('should double in size after surpassing load factor', (done) => {
      const HT = new HashTable();
      for (let i = 0; i < 10; i++) HT.set(i, i);
      expect(HT.size).toEqual(22);
      done();
    });

    it('should double in size after surpassing load factor multiple times', (done) => {
      const HT = new HashTable();
      for (let i = 0; i < 40; i++) HT.set(i, i);
      expect(HT.size).toEqual(88);
      done();
    });

    it('should have correct items after resizing multiple times', (done) => {
      const HT = new HashTable();
      for (let i = 0; i < 100; i++) HT.set(i, 'dog');
      expect(HT.items).toEqual(100);
      done();
    });

    it('should halve in size after surpassing 1 - load factor', (done) => {
      const HT = new HashTable();
      done();
    });
  });
  describe('getKeys', () => {});
});
