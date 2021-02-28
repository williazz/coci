const Queue = require('algorithms/data_structures/queue');

const iterativeDFS = {
  DFS: {
    preOrder,
    inOrder,
    postOrder,
  },
  BFS,
};

/**
 * O(logn) space using stack
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * @param {BSTNode} root
 * @param {Function} visit
 */
function preOrder(root, visit) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      visit(node);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
}

/**
 * O(logn) space using stack
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * @param {BSTNode} root
 * @param {Function} visit
 */
function inOrder(root, visit) {
  const stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    visit(root);
    root = root.right;
  }
}

/**
 * O(logn) space using stack
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * @param {BSTNode} root
 * @param {Function} visit
 */
function postOrder(root, visit) {
  const stack = [];
  while (stack.length || root) {
    while (root) {
      if (root.right) stack.push(root.right);
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    if (stack.length && node.right === stack[stack.length - 1]) {
      root = stack.pop();
      stack.push(node);
    } else {
      visit(node);
    }
  }
}

/**
 * O(logn) space using queue
 * @param {BSTNode} root
 * @param {Function} visit
 */
function BFS(root, visit) {
  const q = new Queue();
  if (root) q.push(root);
  while (!q.isEmpty()) {
    const node = q.pop();
    visit(node);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
}

module.exports = iterativeDFS;
