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
      expect(HT.hash(235235) < 32).toBeTrue();
      expect(HT.hash('asdf345artrhrf329??>') < 32).toBeTrue();
      expect(HT.hash({ isThisAnObject: 'why yes it is' }) < 32).toBeTrue();
      expect(
        HT.hash(() => {
          return;
        }) < 32,
      ).toBeTrue();
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
      expect(pair.val.val).toBe(newVal);
      done();
    });

    it('should only increment HT.items when a new pari is created', (done) => {
      expect(HT.items).toEqual(0);
      HT.set('key', 'val');
      expect(HT.items).toEqual(1);
      _.range(10).forEach((i) => HT.set(i, 'anotha one'));
      expect(HT.items).toEqual(11);
      _.range(10).forEach((i) => HT.set(i, 'anotha one'));
      expect(HT.items).toEqual(11);
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
    it('should everything from the hash table', (done) => {
      for (let i = 0; i < 100; i++) HT.set(i, i);
      const arr = HT.toArray()
        .map((x) => x.key)
        .sort((a, b) => a - b);
      expect(_util.deepEqual(arr, _.range(100))).toBeTrue();
      done();
    });
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
  describe('resize', () => {});
  describe('getKeys', () => {});
});
