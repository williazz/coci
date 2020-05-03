const HashTable = require('../HashTable.js');
const _util = require('../../../_util');

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
  });

  describe('get', () => {
    it('should only find key value string pairs that exist', (done) => {
      const key = 'dogs';
      const val = 'are better than cats';
      HT.set(key, val);
      expect(HT.get(key).val).toEqual(val);
      expect(HT.get('hocus pocus')).toBeUndefined();
      done();
    });

    it('should work with objects', (done) => {
      const key = { keyAsAnObject: true };
      const val = { hello: 'there' };
      HT.set(key, val);
      expect(HT.get(key).val).toEqual(val);
      expect(HT.get('hocus pocus')).toBeUndefined();
      done();
    });
  });

  describe('delete', () => {});
  describe('resize', () => {});
  describe('getKeys', () => {});
});
