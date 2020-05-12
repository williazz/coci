const LinkedListNode = require('../LinkedListNode.js');

describe('LinkedListNode', () => {
  describe('insert', () => {
    it('should add a next node', (done) => {
      const my = new LinkedListNode(1);
      my.insert(2);
      expect(my.toString()).toEqual('12');
      done();
    });

    it('should have inserted children precede preexisting children', (done) => {
      const my = new LinkedListNode(1);
      my.insert(3);
      my.insert(2);
      expect(my.toString()).toEqual('123');
      done();
    });
  });
});
