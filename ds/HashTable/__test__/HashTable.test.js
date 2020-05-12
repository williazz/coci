const HashTable = require('../index.js');
const _util = require('../../../util');
const _ = require('underscore');
const sinon = require('sinon');

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

    it('should increment HT.items when a new pair is created', (done) => {
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
      expect(arr.length).toEqual(HT.items);
      done();
    });
    it('should get everything from the hash table', (done) => {
      for (let i = 0; i < 100; i++) HT.set(i, i);
      const arr = HT.toArray((x) => x.key)
        .sort((a, b) => a - b)
        .join('');
      expect(arr).toEqual(_.range(100).join(''));
      done();
    });
  });

  describe('delete', () => {
    it('should delete one item', (done) => {
      HT.set('key', 'val');
      const { items } = HT;
      HT.delete('key');
      expect(HT.items).toEqual(items - 1);
      expect(HT.toArray.length).toEqual(0);
      done();
    });

    it('should return the deleted value', (done) => {
      HT.set(1, 5);
      const del = HT.delete(1);
      expect(del.key).toEqual(1);
      expect(del.val).toEqual(5);
      done();
    });

    it('should reduce items', (done) => {
      for (let i = 0; i < 50; i++) HT.set(i, i * 10);
      HT.delete('key');
      for (let i = 0; i < 50; i++) {
        HT.delete(i);
        expect(HT.items).toEqual(50 - i - 1);
      }
      done();
    });

    it('should delete many key value pairs', (done) => {
      for (let i = 0; i < 50; i++) HT.set(i, i * 10);
      for (let i = 20; i < 50; i++) HT.delete(i);
      expect(
        HT.toArray((x) => x.key)
          .sort((a, b) => a - b)
          .join(''),
      ).toEqual(_.range(20).join(''));
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
      HT.items = 10;
      expect(HT.needsResizing()).toEqual(22);
      done();
    });

    it('should should not initially need to resize', (done) => {
      expect(HT.needsResizing()).toBeFalse();
      done();
    });

    it('should need downsizing when inverse of load factor is surpassed', (done) => {
      HT.size = 22;
      HT.items = 0;
      expect(HT.needsResizing()).toEqual(11);
      done();
    });
  });

  describe('resize', () => {
    it('should update the size', (done) => {
      const prev = HT.size;
      HT.resize(20);
      const next = HT.size;
      expect(next).not.toEqual(prev);
      done();
    });

    it('should remap the key value pairs', (done) => {
      for (let i = 0; i < 10; i++) HT.set(i, i * 10);
      const prev = HT.toArray((x) => x.val).join('');
      HT.resize(11);
      const next = HT.toArray((x) => x.val).join('');
      expect(next).not.toEqual(prev);
      done();
    });

    it('should have the same key val pairs after resizing', (done) => {
      for (let i = 0; i < 10; i++) HT.set(i, i * 10);
      const prev = HT.toArray()
        .sort()
        .join('');
      HT.resize(50);
      const next = HT.toArray()
        .sort()
        .join('');
      expect(next).toEqual(prev);
      done();
    });
  });

  describe('resizeIfNeeded', () => {
    it('should have method resizeIfNeeded', (done) => {
      expect(HT.resizeIfNeeded).toBeInstanceOf(Function);
      done();
    });

    it('should be called after every set', (done) => {
      const spy = sinon.spy(HT, 'resizeIfNeeded');
      for (let i = 0; i < 50; i++) HT.set(i, i * 50);
      expect(spy.callCount).toEqual(50);
      done();
    });

    it('should be called after every delete', (done) => {
      for (let i = 0; i < 50; i++) HT.set(i, i * 50);
      const spy = sinon.spy(HT, 'resizeIfNeeded');
      for (let i = 0; i < 50; i++) HT.delete(i);
      expect(spy.callCount).toEqual(50);
      done();
    });

    it('should call HashTable.resize after exceeding load factor once', (done) => {
      const spy = sinon.spy(HT, 'resize');
      for (let i = 0; i < 9; i++) HT.set(i, i * 10);
      expect(spy.callCount).toEqual(1);
      done();
    });

    it('should call HashTable.resize after exceeding load factor multiple times', (done) => {
      const spy = sinon.spy(HT, 'resize');
      for (let i = 0; i < 40; i++) HT.set(i, i * 10);
      expect(spy.callCount).toEqual(3);
      done();
    });

    it('should call HashTable.resize after going below load factor multiple times', (done) => {
      const spy = sinon.spy(HT, 'resize');
      for (let i = 0; i < 40; i++) HT.set(i, i * 10);
      for (let i = 0; i < 40; i++) HT.delete(i);
      expect(spy.callCount).toEqual(6);
      done();
    });
  });
});
