const LinkedList = require('./LinkedList.js');

describe('LinkedList', () => {
  it('should append number 1-5 sequentially', (done) => {
    const LL = new LinkedList();
    for (let i = 1; i < 6; i++) LL.append(i);
    let currentNode = LL.head;
    for (let i = 1; i < 6; i++) {
      expect(currentNode.val).toEqual(i);
      currentNode = currentNode.next;
    }
    done();
  });

  it('should prepend numbers 1-5 sequentially', (done) => {
    const LL = new LinkedList();
    for (let i = 1; i < 6; i++) LL.prepend(i);
    let currentNode = LL.head;
    for (let i = 5; i >= 1; i--) {
      expect(currentNode.val).toEqual(i);
      currentNode = currentNode.next;
    }
    done();
  });

  it('should delete number 3 from a list of 1-5', (done) => {
    done();
  });
});
