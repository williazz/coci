const iterative = require('./iterative');
const AVLTree = require('algorithms/data_structures/avl_tree');

describe('tree-traversal', () => {
  describe('dfs', () => {
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
        iterative.DFS.preOrder(totallyFullBST.root, (node) =>
          res.push(node.value)
        );
        expect(res.join('')).toEqual('4213657');
      });

      it('should do in-order on a totally filled totallyFullBST', () => {
        const res = [];
        iterative.DFS.inOrder(totallyFullBST.root, (node) =>
          res.push(node.value)
        );
        expect(res.join('')).toEqual('1234567');
      });

      it('should do post-order on a totally filled totallyFullBST', () => {
        const res = [];
        iterative.DFS.postOrder(totallyFullBST.root, (node) =>
          res.push(node.value)
        );
        expect(res.join('')).toEqual('1325764');
      });
    });
  });
});
