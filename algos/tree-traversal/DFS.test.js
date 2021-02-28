const iterative = require('./iterative');
const AVLTree = require('algorithms/data_structures/avl_tree');

describe('tree-traversal', () => {
  let totallyFullBST;
  beforeAll(() => {
    totallyFullBST = new AVLTree();
    for (let i = 1; i <= 7; i++) {
      totallyFullBST.insert(i);
    }
  });
  describe('iterative', () => {
    it('should do pre-order on a totally filled totallyFullBST', () => {
      const res = [];
      iterative.preOrder(totallyFullBST.root, (node) => res.push(node.value));
      expect(res.join('')).toEqual('4213657');
    });

    it('should do in-order on a totally filled totallyFullBST', () => {
      const res = [];
      iterative.inOrder(totallyFullBST.root, (node) => res.push(node.value));
      expect(res.join('')).toEqual('1234567');
    });

    it('should do post-order on a totally filled totallyFullBST', () => {
      const res = [];
      iterative.postOrder(totallyFullBST.root, (node) => res.push(node.value));
      expect(res.join('')).toEqual('1325764');
    });

    it('should do BFS', () => {
      const res = [];
      iterative.BFS(totallyFullBST.root, (node) => res.push(node.value));
      expect(res.join('')).toEqual('4261357');
    });
  });
});
