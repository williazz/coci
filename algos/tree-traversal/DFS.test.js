const iterative = require('./iterative');
const AVLTree = require('algorithms/data_structures/avl_tree');

describe('DFS', () => {
  let bst;
  beforeAll(() => {
    bst = new AVLTree();
    for (let i = 1; i <= 7; i++) {
      bst.insert(i);
    }
  });
  describe('iterative', () => {
    it('In-order should be in order', () => {
      const res = [];
      iterative.DFS.inOrder(bst.root, (node) => res.push(node.value));
      expect(res.join('')).toEqual('1234567');
    });
  });
});
